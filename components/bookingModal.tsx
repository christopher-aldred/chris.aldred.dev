// Server-side Modal

import Link from "next/link";

export default function BookingModal() {
  return (
    <div className="z-50 fixed inset-0 bg-gray-900 bg-opacity-90 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-4 border w-auto h-auto shadow-lg rounded-md bg-white">
        <div className="text-center">
          <div className="flex flex-col justify-center">
            {/* Navigates back to the base URL - closing the modal */}
            <iframe
              className="rounded-md inline-block lg:hidden"
              src="https://koalendar.com/e/meet-with-chris-aldred?embed=true"
              width="325px"
              height="525px"
            ></iframe>
            <iframe
              className="rounded-md lg:inline-block hidden"
              src="https://koalendar.com/e/meet-with-chris-aldred?embed=true"
              width="400px"
              height="650px"
            ></iframe>
            <Link
              href="/test"
              className="mt-4 px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
