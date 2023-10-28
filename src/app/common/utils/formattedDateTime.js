export default function formatCurrentDateTime() {
    const now = new Date();
  
    // Define the months and AM/PM
    const months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
  
    // Get the individual components of the date and time
    const day = now.getDate().toString().padStart(2, "0");
    const month = months[now.getMonth()];
    const year = now.getFullYear().toString().slice(-2);
    const hours = (now.getHours() % 12).toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
  
    // Combine the components to create the formatted date and time
    const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}${ampm}`;
  
    return formattedDateTime;
  }