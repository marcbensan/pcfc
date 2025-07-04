import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-caption bg-primarypcfc py-20 text-white">
      <div className="container px-6 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-logo text-4xl font-bold text-white md:text-5xl">
              GET IN TOUCH
            </h2>
            <p className="mt- text-sm text-gray-300">
              Follow us on social media to stay updated.
            </p>
          </div>
          <div className="flex space-x-6 text-white">
            <Link
              href="https://www.instagram.com/pcfctoronto/"
              target="_blank"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="35"
                height="35"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
              <span className="text-lg font-medium">@pcfctoronto</span>
            </Link>
            <Link
              href="https://www.facebook.com/PCFCTORONTO"
              target="_blank"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="30"
                height="30"
              >
                <path
                  fill="currentColor"
                  d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"
                ></path>
              </svg>
              <span className="whitespace-nowrap text-lg font-medium">
                PCFC Toronto
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-500/30 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} PCFC Toronto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
