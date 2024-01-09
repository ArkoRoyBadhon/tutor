"use client";

import AvailableService from "@/components/home/availableService";
import ClientService from "@/components/home/clientReview";
import Events from "@/components/home/events";
import LatestNews from "@/components/home/latestNews";
import Overview from "@/components/home/overview";
import UpcomingService from "@/components/home/upcomingService";

const HomePage = () => {
  

  return (
    <div className="py-10">
      {/* <h1 className="text-red-200">Header</h1> */}
      <AvailableService />
      <UpcomingService />
      <Events />
      <Overview />
      <ClientService />
      <LatestNews />
    </div>
  );
};

export default HomePage;
