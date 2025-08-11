// Account success page - shown after user signs up
export default function AccountSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <img
          src="/martin-logo.png"
          alt="Martin"
          className="h-[58px] mx-auto mb-12"
        />

        {/* Main Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Great, now check your inbox
        </h1>

        {/* Instructions */}
        <p className="text-lg text-gray-600 mb-2">
          We just sent you an email to complete the signup process & set your password.
        </p>
        
        <p className="text-lg text-gray-600 mb-8">
          Please check your spam folder if you haven't received it within a few minutes.
        </p>

        {/* Help Text */}
        <p className="text-gray-600 mb-6">
          Need some help? Shoot us a note at{' '}
          <a 
            href="mailto:support@getmartin.io" 
            className="text-blue-600 hover:text-blue-700 underline"
          >
            support@getmartin.io
          </a>
          . We're here to help!
        </p>

        {/* Visit Help Center Button */}
        <a
          href="https://help.getmartin.io"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
        >
          Visit our help center
        </a>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-sm text-gray-500">
        <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
        © {new Date().getFullYear()} Martin. All rights reserved.
      </div>
    </div>
  );
}