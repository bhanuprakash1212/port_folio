const https = require("https");
const fs = require("fs");
const path = require("path");

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        if (response.statusCode === 200) {
          const writeStream = fs.createWriteStream(filepath);
          response.pipe(writeStream);
          writeStream.on("finish", () => {
            writeStream.close();
            resolve();
          });
        } else {
          reject(`Failed to download image: ${response.statusCode}`);
        }
      })
      .on("error", (error) => {
        reject(`Error downloading image: ${error.message}`);
      });
  });
};

const downloadAllImages = async () => {
  const projectsDir = path.join(process.cwd(), "public", "projects");

  // Create directories if they don't exist
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }

  const images = [
    {
      name: "launch.jpg",
      url: "https://picsum.photos/1200/800?random=1",
    },
    {
      name: "devcraft.jpg",
      url: "https://picsum.photos/800/600?random=2",
    },
    {
      name: "cloudsync.jpg",
      url: "https://picsum.photos/800/600?random=3",
    },
    {
      name: "dataviz.jpg",
      url: "https://picsum.photos/800/600?random=4",
    },
    {
      name: "secureauth.jpg",
      url: "https://picsum.photos/800/600?random=5",
    },
  ];

  for (const image of images) {
    const filepath = path.join(projectsDir, image.name);
    console.log(`Downloading ${image.name}...`);
    try {
      await downloadImage(image.url, filepath);
      console.log(`Successfully downloaded ${image.name}`);
    } catch (error) {
      console.error(`Failed to download ${image.name}:`, error);
    }
  }
};

downloadAllImages()
  .then(() => {
    console.log("All images downloaded successfully!");
  })
  .catch((error) => {
    console.error("Error downloading images:", error);
  });
