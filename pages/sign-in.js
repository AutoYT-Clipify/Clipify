import { getCurrentUser, signInWithGooglePopup } from "@/utils/firebase.utils";
import React, { useEffect, useState } from "react";
import { sanityClient } from "../sanity";

const SignIn = () => {
  const [url, setUrl] = useState(null);
  const [user, setUser] = useState(null);
  const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  const params = {
    client_id:
      "328356279394-rh2c1rmoutn1p0vrf5396gkfq0njv5gs.apps.googleusercontent.com",
    redirect_uri: `${url}/sign-in`,
    response_type: "token",
    scope: "https://www.googleapis.com/auth/youtube.force-ssl",
    include_granted_scopes: "true",
    state: "pass-through value",
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // setCurrentUser(user);
    const email = userGet();
    setUser(email);
  };

  const userGet = async () => {
    const user = await getCurrentUser();
    console.log("I am user", user);
    if (user) {
      const { email, displayName, photoURL } = user;
      await createUser(displayName, email);
    }
    return user?.email;
  };

  async function createOrUpdateUser(name, email) {
    // const existingUserQuery = `*[_type == "user" && email == $email]`;
    // const existingUser = await sanityClient.fetch(existingUserQuery, { email });
  
    // if (existingUser.length === 0) {
    //   const newUser = {
    //     _type: "user",
    //     name,
    //     email,
    //   };
    //   const response = await sanityClient.create(newUser);
    //   return response;
    // } else {
    //   console.log('User with the same email already exists');
    //   return null;
    // }
  }
  
  useEffect(() => {
    userGet();
    if (user) {
      window.open("/dashboard");
    }
  }, [user]);

  console.log(user, "user");

  const handleSubmit = () => {
    const form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", oauth2Endpoint);

    for (const p in params) {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash.slice(1));
    const accessToken = urlParams.get("access_token");

    if (accessToken) {
      // Handle the access token, e.g., store it in state or local storage
      console.log("Access Token:", accessToken);
      window.open("/sign-in-success");
    } else {
      console.log("No access token received.");
    }
    const baseUrl = window.location.origin;
    setUrl(baseUrl);
  }, []);
  return (
    <>
      <div
        style={{
          cursor: "auto",
          boxSizing: "border-box",
          textRendering: "optimizelegibility",
          WebkitFontSmoothing: "antialiased",
          fontFamily: 'Gelion, Helvetica, "Helvetica Neue", Arial',
          lineHeight: "21px",
          fontSize: "14px",
          color: "rgb(3, 3, 3)",
          fontVariantLigatures: "no-common-ligatures",
          letterSpacing: "-0.1px",
          backgroundColor: "rgb(242, 242, 242)",
          height: "100vh",
          margin: "0px",
        }}
      >
        <noscript
          style={{
            boxSizing: "border-box",
            textRendering: "optimizelegibility",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBRJKGT&gtm_auth=&gtm_preview=&gtm_cookies_win=x"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            id="tag-manager"
          ></iframe>
        </noscript>
        <noscript
          style={{
            boxSizing: "border-box",
            textRendering: "optimizelegibility",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          You need to enable JavaScript to run this app.
        </noscript>
        <div
          style={{
            boxSizing: "border-box",
            textRendering: "optimizelegibility",
            WebkitFontSmoothing: "antialiased",
            position: "relative",
            zIndex: 1,
            height: "100%",
          }}
        >
          <div
            style={{
              height: "100%",
              boxSizing: "border-box",
              textRendering: "optimizelegibility",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                boxSizing: "border-box",
                textRendering: "optimizelegibility",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <div
                style={{
                  minWidth: "0px",
                  width: "50%",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  WebkitBoxPack: "center",
                  justifyContent: "center",
                  height: "100vh",
                  backgroundColor: "rgb(254, 254, 254)",
                  boxSizing: "border-box",
                  textRendering: "optimizelegibility",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <div
                  style={{
                    padding: "50px",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    WebkitBoxPack: "justify",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                    textRendering: "optimizelegibility",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      display: "block",
                      position: "relative",
                      color: "rgb(3, 3, 3)",
                      textDecoration: "none solid rgb(3, 3, 3)",
                      boxSizing: "border-box",
                      textRendering: "optimizelegibility",
                      WebkitFontSmoothing: "antialiased",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                    }}
                  >
                    <div
                      style={{
                        display: "block",
                        position: "relative",
                        boxSizing: "border-box",
                        textRendering: "optimizelegibility",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <img
                        size="3"
                        src="/static/yt-logo.png"
                        alt="Uizard"
                        style={{
                          display: "none",
                          height: "30px",
                          boxSizing: "border-box",
                          textRendering: "optimizelegibility",
                          WebkitFontSmoothing: "antialiased",
                          borderStyle: "none",
                        }}
                      />
                      <img
                        size="5"
                        src="/logo.png"
                        alt="Uizard"
                        style={{
                          display: "block",
                          height: "80px",
                          boxSizing: "border-box",
                          textRendering: "optimizelegibility",
                          WebkitFontSmoothing: "antialiased",
                          borderStyle: "none",
                        }}
                      />
                    </div>
                  </a>
                </div>
                <div
                  style={{
                    maxWidth: "calc(100% - 100px)",
                    width: "400px",
                    margin: "0px auto",
                    boxSizing: "border-box",
                    textRendering: "optimizelegibility",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 500,
                      backgroundColor: "rgb(232, 232, 232)",
                      height: "1px",
                      margin: "32px 0px",
                      boxSizing: "border-box",
                      textRendering: "optimizelegibility",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  ></div>
                  <form
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      textRendering: "optimizelegibility",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        textRendering: "optimizelegibility",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <h2 className="bold text-[3rem] text-left mb-[4rem]">
                        Sign Up to get your Post
                      </h2>
                      <div
                        style={{
                          flexWrap: "nowrap",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          gap: "16px",
                          boxSizing: "border-box",
                          textRendering: "optimizelegibility",
                          WebkitFontSmoothing: "antialiased",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0%",
                            boxSizing: "border-box",
                            textRendering: "optimizelegibility",
                            WebkitFontSmoothing: "antialiased",
                          }}
                        >
                          <button
                            onClick={signInWithGoogle}
                            type="button"
                            style={{
                              padding: "0px",
                              cursor: "pointer",
                              display: "flex",
                              WebkitBoxAlign: "center",
                              alignItems: "center",
                              WebkitBoxPack: "center",
                              justifyContent: "center",
                              position: "relative",
                              borderRadius: "8px",
                              color: "rgb(3, 3, 3)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              boxShadow: "none",
                              border: "0.8px solid rgb(232, 232, 232)",
                              transition: "border 0.3s ease 0s",
                              width: "100%",
                              boxSizing: "border-box",
                              textRendering: "optimizelegibility",
                              WebkitFontSmoothing: "antialiased",
                              appearance: "none",
                              textTransform: "none",
                              overflow: "visible",
                              fontFamily:
                                'Gelion, Helvetica, "Helvetica Neue", Arial',
                              fontSize: "14px",
                              lineHeight: "16.1px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                padding: "12px 16px",
                                display: "flex",
                                WebkitBoxAlign: "center",
                                alignItems: "center",
                                WebkitBoxPack: "center",
                                justifyContent: "center",
                                boxSizing: "border-box",
                                whiteSpace: "nowrap",
                                visibility: "visible",
                                gap: "12px",
                                textRendering: "optimizelegibility",
                                WebkitFontSmoothing: "antialiased",
                              }}
                            >
                              <img
                                src="https://app.uizard.io/static/media/google.c17df322b408a9f3f31c4bc735c95e04.svg"
                                style={{
                                  boxSizing: "border-box",
                                  textRendering: "optimizelegibility",
                                  WebkitFontSmoothing: "antialiased",
                                  borderStyle: "none",
                                }}
                              />
                              <div
                                style={{
                                  margin: "0px",
                                  fontSize: "14px",
                                  lineHeight: "16px",
                                  letterSpacing: "-0.1px",
                                  textAlign: "center",
                                  fontWeight: 500,
                                  color: "rgb(3, 3, 3)",
                                  textTransform: "none",
                                  boxSizing: "border-box",
                                  textRendering: "optimizelegibility",
                                  WebkitFontSmoothing: "antialiased",
                                }}
                              >
                                Sign up with Google
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                style={{
                  display: "block",
                  minWidth: "0px",
                  width: "50%",
                  height: "100vh",
                  boxSizing: "border-box",
                  textRendering: "optimizelegibility",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "707.2px",
                    position: "relative",
                    flexDirection: "column",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    WebkitBoxPack: "justify",
                    justifyContent: "space-between",
                    padding: "150px 0px 100px",
                    overflow: "hidden",
                    background: 'rgba(0, 0, 0, 0) url("/signin-bg.jpg")',
                    boxSizing: "border-box",
                    textRendering: "optimizelegibility",
                    WebkitFontSmoothing: "antialiased",
                    height: "100vh",
                  }}
                >
                  <div
                    style={{
                      width: "184px",
                      height: "60px",
                      marginBottom: "16px",
                      boxSizing: "border-box",
                      textRendering: "optimizelegibility",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    <a
                      href="https://www.capterra.com/reviews/170822/Uizard?utm_source=vendor&amp;utm_medium=badge&amp;utm_campaign=capterra_reviews_badge"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        boxSizing: "border-box",
                        textRendering: "optimizelegibility",
                        WebkitFontSmoothing: "antialiased",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                      }}
                    >
                      <img
                        alt="capterra logo"
                        src="https://assets.capterra.com/badge/686709342337db91a58091b16c44513d.svg?v=2118363&amp;p=170822"
                        style={{
                          boxSizing: "border-box",
                          textRendering: "optimizelegibility",
                          WebkitFontSmoothing: "antialiased",
                          borderStyle: "none",
                        }}
                      />
                    </a>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      WebkitBoxPack: "justify",
                      justifyContent: "space-between",
                      width: "520px",
                      maxWidth: "calc(100% - 100px)",
                      margin: "20px 0px 74px",
                      background:
                        "rgba(255, 255, 255, 0.5) none repeat scroll 0% 0% / auto padding-box border-box",
                      border: "0.8px solid rgb(255, 255, 255)",
                      borderRadius: "24px",
                      boxSizing: "border-box",
                      textRendering: "optimizelegibility",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        boxSizing: "border-box",
                        textRendering: "optimizelegibility",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <img
                        src="/man.png"
                        alt="avatar"
                        style={{
                          position: "relative",
                          display: "block",
                          width: "60px",
                          height: "60px",
                          margin: "30px auto 0px",
                          boxSizing: "border-box",
                          textRendering: "optimizelegibility",
                          WebkitFontSmoothing: "antialiased",
                          borderStyle: "none",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          WebkitBoxPack: "start",
                          justifyContent: "flex-start",
                          textAlign: "center",
                          margin: "15px 30px 66px",
                          boxSizing: "border-box",
                          textRendering: "optimizelegibility",
                          WebkitFontSmoothing: "antialiased",
                        }}
                      >
                        <div
                          style={{
                            margin: "0px",
                            fontSize: "18px",
                            lineHeight: "22px",
                            textAlign: "center",
                            fontWeight: 500,
                            color: "rgb(3, 3, 3)",
                            textTransform: "none",
                            boxSizing: "border-box",
                            textRendering: "optimizelegibility",
                            WebkitFontSmoothing: "antialiased",
                          }}
                        >
                          “Since I started using this platform, my channel has
                          seen exponential growth. It's like having a virtual
                          assistant that optimizes my content and engages with
                          my audience. A must-have for serious creators”
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "block",
                        position: "absolute",
                        bottom: "-54px",
                        left: "274.75px",
                        boxSizing: "border-box",
                        textRendering: "optimizelegibility",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-24.35px",
                          left: "-14.675px",
                          width: "36px",
                          height: "36px",
                          backgroundImage:
                            'url("https://app.uizard.io/static/media/Cursor.dcbbd2226fb2026401ebe63617bb76f4.svg")',
                          boxSizing: "border-box",
                          textRendering: "optimizelegibility",
                          WebkitFontSmoothing: "antialiased",
                        }}
                      ></div>
                      <div
                        style={{
                          display: "flex",
                          flexFlow: "column nowrap",
                          WebkitBoxPack: "center",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          borderRadius: "14px",
                          backgroundColor: "rgb(255, 139, 3)",
                          color: "rgb(255, 255, 255)",
                          height: "84px",
                          boxSizing: "border-box",
                          textRendering: "optimizelegibility",
                          WebkitFontSmoothing: "antialiased",
                        }}
                      >
                        <div
                          style={{
                            margin: "12px 16px 0px",
                            fontSize: "16px",
                            lineHeight: "20px",
                            letterSpacing: "-0.1px",
                            textAlign: "start",
                            fontWeight: 400,
                            color: "rgb(255, 255, 255)",
                            textTransform: "none",
                            boxSizing: "border-box",
                            textRendering: "optimizelegibility",
                            WebkitFontSmoothing: "antialiased",
                          }}
                        >
                          Nkosinathi Temba,
                        </div>
                        <div
                          style={{
                            margin: "0px 16px",
                            fontSize: "16px",
                            lineHeight: "20px",
                            letterSpacing: "-0.1px",
                            textAlign: "start",
                            fontWeight: 400,
                            color: "rgb(255, 255, 255)",
                            textTransform: "none",
                            boxSizing: "border-box",
                            textRendering: "optimizelegibility",
                            WebkitFontSmoothing: "antialiased",
                          }}
                        >
                          Founder,
                        </div>
                        <div
                          style={{
                            margin: "0px 16px 12px",
                            fontSize: "16px",
                            lineHeight: "20px",
                            letterSpacing: "-0.1px",
                            textAlign: "start",
                            fontWeight: 400,
                            color: "rgb(255, 255, 255)",
                            textTransform: "none",
                            boxSizing: "border-box",
                            textRendering: "optimizelegibility",
                            WebkitFontSmoothing: "antialiased",
                          }}
                        >
                          Thutos
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      display: "block",
                      maxWidth: "400px",
                      textAlign: "center",
                      margin: "16px 16px 0px",
                      boxSizing: "border-box",
                      textRendering: "optimizelegibility",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    {/* <div style={{ margin: '0px', fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.2px', textAlign: 'center', fontWeight: 500, color: 'rgb(3, 3, 3)', textTransform: 'none', boxSizing: 'border-box', textRendering: 'optimizelegibility', WebkitFontSmoothing: 'antialiased' }}>Join 1,000,000+ professionals who trust Uizard with their design needs</div> */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            boxSizing: "border-box",
            textRendering: "optimizelegibility",
            WebkitFontSmoothing: "antialiased",
            position: "relative",
            zIndex: 2,
          }}
        ></div>
        <div
          style={{
            boxSizing: "border-box",
            textRendering: "optimizelegibility",
            WebkitFontSmoothing: "antialiased",
            position: "relative",
            zIndex: 8,
          }}
        ></div>
        <div
          style={{
            boxSizing: "border-box",
            textRendering: "optimizelegibility",
            WebkitFontSmoothing: "antialiased",
            position: "relative",
            zIndex: 3,
          }}
        ></div>
        <div
          style={{
            boxSizing: "border-box",
            textRendering: "optimizelegibility",
            WebkitFontSmoothing: "antialiased",
            position: "relative",
            zIndex: 4,
          }}
        ></div>
        <div
          style={{
            boxSizing: "border-box",
            textRendering: "optimizelegibility",
            WebkitFontSmoothing: "antialiased",
            position: "relative",
            zIndex: 5,
          }}
        >
          <div
            style={{
              position: "fixed",
              display: "flex",
              flexDirection: "column",
              WebkitBoxAlign: "center",
              alignItems: "center",
              WebkitBoxPack: "center",
              justifyContent: "center",
              bottom: "10px",
              left: "768px",
              transform: "matrix(1, 0, 0, 1, -160, 0)",
              width: "32rem",
              maxWidth: "calc(100% - 40px)",
              zIndex: 11,
              boxSizing: "border-box",
              textRendering: "optimizelegibility",
              WebkitFontSmoothing: "antialiased",
            }}
          ></div>
        </div>
        <div
          style={{
            boxSizing: "border-box",
            textRendering: "optimizelegibility",
            WebkitFontSmoothing: "antialiased",
          }}
        ></div>
        <div
          style={{
            boxSizing: "border-box",
            textRendering: "optimizelegibility",
            WebkitFontSmoothing: "antialiased",
            position: "relative",
            zIndex: 6,
          }}
        ></div>
        <div
          style={{
            boxSizing: "border-box",
            textRendering: "optimizelegibility",
            WebkitFontSmoothing: "antialiased",
            position: "relative",
            zIndex: 7,
          }}
        ></div>{" "}
        <noscript
          style={{
            boxSizing: "border-box",
            textRendering: "optimizelegibility",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=302191347266077&amp;ev=PageView&amp;noscript=1"
          />
        </noscript>
      </div>
    </>
  );
};

export default SignIn;
