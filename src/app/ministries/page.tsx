import Ministries from "./_components/ministries";

import fs from "fs";
import path from "path";

export default function MinistryPage() {
  const imagesDirectory = path.join(process.cwd(), "public/ministries");
  const imageFiles = fs.readdirSync(imagesDirectory);

  const images = imageFiles.map((file) => `/ministries/${file}`);

  console.log(images.length);

  return <Ministries images={images} />;
}
