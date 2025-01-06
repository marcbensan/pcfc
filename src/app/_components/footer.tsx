import { Input } from "@/components/ui/input";

export default function Footer(): JSX.Element {
  return (
    <div className="flex h-full w-full flex-col justify-center space-y-8 bg-primarypcfc py-16 md:space-y-16">
      <p className="whitespace-nowrap text-center text-3xl font-bold text-white md:text-5xl">
        GET IN TOUCH
      </p>
      <div className="grid grid-rows-2 items-start gap-8 px-8 md:grid-cols-2 md:grid-rows-1 md:px-24">
        <div className="space-y-4 md:space-y-8">
          <div className="flex flex-row items-center space-x-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="45"
                height="45"
              >
                <path
                  fill="white"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </div>
            <p className="font-barlow text-3xl text-white">@pcfctoronto</p>
          </div>

          <div className="flex flex-row items-center space-x-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="40"
                height="40"
              >
                <path
                  fill="white"
                  d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"
                ></path>
              </svg>
            </div>
            <p className="font-barlow text-3xl text-white">PCFC Toronto</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="font-barlow text-xl text-white">Stay Connected</p>
          <Input type="email" placeholder="Email" className="w-full" />
        </div>
      </div>
    </div>
  );
}
