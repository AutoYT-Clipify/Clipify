import React from 'react'

const SignInSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <svg
        className="w-16 h-16 mx-auto text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <h1 className="text-2xl bold mt-4">Sign-In Successful!</h1>
      <p className="bold text-[3rem] text-gray-700 mt-2">
        You have successfully signed in to your account.
      </p>
      <a
        href="/dashboard"
        className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white text-[2rem] px-4 py-2 rounded-lg transition duration-300"
      >
        Go to Dashboard
      </a>
    </div>
  </div>
  )
}

export default SignInSuccess