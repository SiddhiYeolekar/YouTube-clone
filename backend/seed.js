// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import VideoModel from "./model/video.model.js";

// dotenv.config();


// // Replace this with an actual ObjectId from your Channel collection if available
// const dummyChannelId = new mongoose.Types.ObjectId(); // you can manually replace this later

// const dummyVideos = [
//   {
//     title: "Intro to Full Stack Development",
//     description: "Learn how full stack apps work with real-world projects.",
//     videoLink: "https://www.youtube.com/watch?v=8KaJRw-rfn8",
//     thumbnail: "https://tse1.mm.bing.net/th/id/OIP.aw4nYE1ljEmJPa2dTtcODAHaEw?pid=Api&P=0&h=180",
//     views: 12000,
//     likes: 350,
//     dislikes: 10,
//     category: "Programming",
//     channel: "6872c466db1f5a7cd8c071a5",
//     likedBy: [],
//     dislikedBy: [],
//     comments: [],
//   },
//   {
//     title: "Tech trends in 2025",
//     description: "This video explains the lastest tech trends in 2025",
//     videoLink: "https://www.youtube.com/watch?v=yM9sUZLAFhI",
//     thumbnail: "https://automationedge.com/wp-content/uploads/2025/01/Top-10-Strategic-Technology-Trends-for-2025.webp",
//     views: 25000,
//     likes: 800,
//     dislikes: 20,
//     category: "Tech",
//     channel: "68739ecc075a6839538087e4",
//     likedBy: [],
//     dislikedBy: [],
//     comments: [],
//   },
//   {
//     title: "Building a YouTube Clone with MERN Stack",
//     description: "This tutorial covers building a YouTube clone using MongoDB, Express, React, and Node.js.",
//     videoLink: "https://www.youtube.com/watch?v=hBdq3WTNZVQ",
//     thumbnail: "https://media.geeksforgeeks.org/wp-content/uploads/20240305101528/Roadmap-to-Mern-stack-developer-copy-(3).webp",
//     views: 25000,
//     likes: 800,
//     dislikes: 20,
//     category: "Web Development",
//     channel: "68738dc700d786d453228215",
//     likedBy: [],
//     dislikedBy: [],
//     comments: [],
//   },
//   {
//     title: "CSS Grid vs Flexbox: When to Use What?",
//     description: "A deep dive into CSS layout systems.",
//     videoLink: "https://www.youtube.com/watch?v=OEV8gMkCHXQ",
//     thumbnail: "https://tse2.mm.bing.net/th/id/OIP.gvtjgodFsukPLNAnD8j-cQHaEk?pid=Api&P=0&h=180",
//     views: 18000,
//     likes: 600,
//     dislikes: 15,
//     category: "Design",
//     channel: "6872c466db1f5a7cd8c071a5",
//     likedBy: [],
//     dislikedBy: [],
//     comments: [],
//   }
// ];

// const seedDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("✅ MongoDB connected for seeding...");

//     await VideoModel.deleteMany();
//     await VideoModel.insertMany(dummyVideos);

//     console.log("✅ Videos seeded successfully!");
//     process.exit();
//   } catch (error) {
//     console.error("❌ Seeding error:", error);
//     process.exit(1);
//   }
// };

// seedDatabase();


import mongoose from "mongoose";
import dotenv from "dotenv";
import VideoModel from "./model/video.model.js";

dotenv.config();

// ✅ Dummy videos with existing valid Channel IDs from your DB
const dummyVideos = [
  {
    title: "Intro to Full Stack Development",
    description: "Learn how full stack apps work with real-world projects.",
    videoLink: "https://www.youtube.com/watch?v=8KaJRw-rfn8",
    thumbnail: "https://tse1.mm.bing.net/th/id/OIP.aw4nYE1ljEmJPa2dTtcODAHaEw?pid=Api&P=0&h=180",
    views: 12000,
    likes: 350,
    dislikes: 10,
    category: "Programming",
    channel: new mongoose.Types.ObjectId("6872c466db1f5a7cd8c071a5"),
    likedBy: [],
    dislikedBy: [],
    comments: [],
  },
  {
    title: "Tech trends in 2025",
    description: "This video explains the latest tech trends in 2025",
    videoLink: "https://www.youtube.com/watch?v=yM9sUZLAFhI",
    thumbnail: "https://automationedge.com/wp-content/uploads/2025/01/Top-10-Strategic-Technology-Trends-for-2025.webp",
    views: 25000,
    likes: 800,
    dislikes: 20,
    category: "Tech",
    channel: new mongoose.Types.ObjectId("68739ecc075a6839538087e4"),
    likedBy: [],
    dislikedBy: [],
    comments: [],
  },
  {
    title: "Building a YouTube Clone with MERN Stack",
    description: "This tutorial covers building a YouTube clone using MongoDB, Express, React, and Node.js.",
    videoLink: "https://www.youtube.com/watch?v=hBdq3WTNZVQ",
    thumbnail: "https://media.geeksforgeeks.org/wp-content/uploads/20240305101528/Roadmap-to-Mern-stack-developer-copy-(3).webp",
    views: 25000,
    likes: 800,
    dislikes: 20,
    category: "Web Development",
    channel: new mongoose.Types.ObjectId("68738dc700d786d453228215"),
    likedBy: [],
    dislikedBy: [],
    comments: [],
  },
  {
    title: "CSS Grid vs Flexbox: When to Use What?",
    description: "A deep dive into CSS layout systems.",
    videoLink: "https://www.youtube.com/watch?v=OEV8gMkCHXQ",
    thumbnail: "https://tse2.mm.bing.net/th/id/OIP.gvtjgodFsukPLNAnD8j-cQHaEk?pid=Api&P=0&h=180",
    views: 18000,
    likes: 600,
    dislikes: 15,
    category: "Design",
    channel: new mongoose.Types.ObjectId("6872c466db1f5a7cd8c071a5"),
    likedBy: [],
    dislikedBy: [],
    comments: [],
  },

  {
    title: "Sapphire - New song",
    description: "New song by Ed Sherran and Arijit Singh. Listen Now",
    videoLink: "https://www.youtube.com/watch?v=JgDNFQ2RaLQ&list=RDJgDNFQ2RaLQ&start_radio=1",
    thumbnail: "https://i.ytimg.com/vi/-6ayFepcxCA/maxresdefault.jpg",
    views: 18000,
    likes: 600,
    dislikes: 15,
    category: "Music",
    channel: new mongoose.Types.ObjectId("6873a9f3c816200df128893c"),
    likedBy: [],
    dislikedBy: [],
    comments: [],
  },
  {
    title: "History of iMac",
    description: "The trend of tech changing, understand with the iMac History",
    videoLink: "https://www.youtube.com/watch?v=P0WdJ9sl6m4",
    thumbnail: "https://i.ytimg.com/vi/WBd2X9OBXC0/maxresdefault.jpg",
    views: 18000,
    likes: 600,
    dislikes: 15,
    category: "Tech",
    channel: new mongoose.Types.ObjectId("68739ecc075a6839538087e4"),
    likedBy: [],
    dislikedBy: [],
    comments: [],
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connected for seeding...");

    await VideoModel.deleteMany();
    console.log("🗑️ Existing videos cleared...");

    await VideoModel.insertMany(dummyVideos);
    console.log("✅ Videos seeded successfully!");

    process.exit();
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();
