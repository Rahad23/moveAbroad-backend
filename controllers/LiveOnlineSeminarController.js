const { liveOnlineSeminarCollection } = require("../mongoDBConfig/collections");
const path = require('path');
const { createDoc, deleteDoc, updateDoc } = require("../utils/mongoQuery");
const { ObjectId } = require("mongodb");
const imageFolderPath = path.join(`${process.env.APP_IMG_URL}/Assets/UniversityImg`);



// const getLiveOnlineSeminar = async (req, res) => {
//   try {
//     const booksData = await liveOnlineSeminarCollection().find({}).toArray();
//     const seminarsWithCountdown = booksData.map(async (liveSeminarData) => {
//       const currentDate = new Date();
//       const registrationPublish = liveSeminarData.publishDate;
//       const registrationTime = liveSeminarData.registrationTiming;
//       const publishDate = new Date(registrationPublish); // Corrected publishDate
//       const registrationTimeLimitMonths = new Date(registrationTime); // Registration time limit in months (adjust as needed)

//       // Calculate the time difference in milliseconds
//       const timeDifference = registrationTimeLimitMonths - currentDate;

//       // Check if the registration time has passed
//       if (timeDifference <= 0) {
//         // Registration time has passed, set all countdown values to 0
//         return {
//           ...liveSeminarData,
//           imagePath: `${imageFolderPath}/${liveSeminarData.universityImg}`,
//           countdown: {
//             years: 0,
//             months: 0,
//             days: 0,
//             hours: 0,
//             minutes: 0,
//             seconds: 0,
//           },
//         };
//       }

//       // Convert the time difference to days, months, and years
//       const millisecondsInADay = 1000 * 60 * 60 * 24;
//       const daysDifference = Math.floor(timeDifference / millisecondsInADay);
//       const monthsDifference = Math.floor(daysDifference / 30); // Assuming 30 days in a month
//       const remainingDays = daysDifference % 30;

//       // Calculate the years and months
//       const yearsDifference = Math.floor(monthsDifference / 12);
//       const monthsRemaining = monthsDifference % 12;

//       // Calculate remaining hours, minutes, and seconds
//       const hoursDifference = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
//       const minutesDifference = Math.floor((timeDifference / (1000 * 60)) % 60);
//       const secondsDifference = Math.floor((timeDifference / 1000) % 60);

//       // Prepare the result object with the countdown information
//       const liveSeminarWithCountdown = {
//         ...liveSeminarData,
//         imagePath: `${imageFolderPath}/${liveSeminarData.universityImg}`,
//         countdown: {
//           years: yearsDifference,
//           months: monthsRemaining,
//           days: remainingDays,
//           hours: hoursDifference,
//           minutes: minutesDifference,
//           seconds: secondsDifference,
//         },
//       };
//       return liveSeminarWithCountdown;
//     });

//     // Wait for all the countdown calculations to complete
//     const result = await Promise.all(seminarsWithCountdown);
//     res.json(result);
//   } catch (error) {
//     console.error('Error fetching live online seminar data:', error);
//     res.status(500).send('Internal Server Error');
//   }
// };



const getLiveOnlineSeminar = async (req, res) => {
  try {
    const booksData = await liveOnlineSeminarCollection().find({}).toArray();
    const seminarsWithCountdown = booksData.map(async (liveSeminarData) => {
      const currentDate = new Date();
      const registrationPublish = liveSeminarData.publishDate;
      const registrationTime = liveSeminarData.registrationTiming;
      const publishDate = new Date(registrationPublish); // Corrected publishDate
      const registrationTimeLimitMonths = new Date(registrationTime); // Registration time limit in months (adjust as needed)

      // Calculate the time difference in milliseconds
      const timeDifference = registrationTimeLimitMonths - currentDate;

 // Check if the registration time has passed
 if (timeDifference <= 0) {
  // Registration time has passed, set all countdown values to 0
  return {
    ...liveSeminarData,
    imagePath: `${imageFolderPath}/${liveSeminarData.universityImg}`,
    countdown: {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  };
}

      // Convert the time difference to days, months, and years
      const millisecondsInADay = 1000 * 60 * 60 * 24;
      const daysDifference = Math.floor(timeDifference / millisecondsInADay);
      const monthsDifference = Math.floor(daysDifference / 30); // Assuming 30 days in a month
      const remainingDays = daysDifference % 30;

      // Calculate the years and months
      const yearsDifference = Math.floor(monthsDifference / 12);
      const monthsRemaining = monthsDifference % 12;

      // Calculate remaining hours, minutes, and seconds
      const hoursDifference = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutesDifference = Math.floor((timeDifference / (1000 * 60)) % 60);
      const secondsDifference = Math.floor((timeDifference / 1000) % 60);

      // Prepare the result object with the countdown information
      const liveSeminarWithCountdown = {
        ...liveSeminarData,
        imagePath: `${imageFolderPath}/${liveSeminarData.universityImg}`,
        countdown: {
          years: yearsDifference,
          months: monthsRemaining,
          days: remainingDays,
          hours: hoursDifference,
          minutes: minutesDifference,
          seconds: secondsDifference,
        },
      };
      return liveSeminarWithCountdown;
    });

    // Wait for all the countdown calculations to complete
    const result = await Promise.all(seminarsWithCountdown);
    console.log(".")
    res.json(result);
  } catch (error) {
    console.error('Error fetching live online seminar data:', error);
    res.status(500).send('Internal Server Error');
  }
};

const getOneLiveSeminarData= async(req, res)=>{
    const dataOneBook = await liveOnlineSeminarCollection().findOne({
      _id: new ObjectId(req.params.id)
  })
  const liveSeminarWithImagePaths = {
      ...dataOneBook,
      imagePath: `${imageFolderPath}`,
    };

  res.send({
      ...liveSeminarWithImagePaths,
  } || {})
}

const saveLiveOnlineSeminar = async (req, res) => {
    const result = await createDoc(req, liveOnlineSeminarCollection);
    res.send(result);
};

const updateLiveOnlineSeminar = async(req, res)=>{
  const result = await updateDoc(req, liveOnlineSeminarCollection);
  res.send(result);
}

const deleteLiveOnlineSeminar= async(req, res)=>{
  const result = await deleteDoc(req, liveOnlineSeminarCollection);
  res.send(result);
}


module.exports = {
    getLiveOnlineSeminar,
    getOneLiveSeminarData,
    saveLiveOnlineSeminar,
    updateLiveOnlineSeminar,
    deleteLiveOnlineSeminar
}