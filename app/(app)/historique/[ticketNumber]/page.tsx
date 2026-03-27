/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import profileImage from "@/public/Header/profileIcon.png";
import laptopImage from '@/public/Dashboard/Ticket/lap.png';
import DOcumentImage from '@/public/History/documentIcon.png';
import { useTicket } from "@/app/hooks/useTicket";
import { useCustomer } from "@/app/hooks/useCustomer";

interface TabType {
  id: string;
  label: string;
}

const TABS: TabType[] = [
  { id: "activite", label: "Activité" },
  { id: "piece", label: "Pièce jointe" },
  { id: "details", label: "Détails" },
  { id: "faq", label: "FAQ" },
];

export default function TicketDetailPage() {
  const params = useParams();
  const ticketNumber : string = params.ticketNumber?.toString() || '';
  const [activeTab, setActiveTab] = useState("activite");
  const { getTicketDetails, toggleTimer, getTimerStatus, loading: timerLoading } = useTicket();
  const [ticket1, setTicket] = useState<any>(null);
  console.log("ticket",ticket1);
  const [customerDetails,setCustomerDetails] = useState<any>(null);
  const [timerStatus, setTimerStatus] = useState<any>(null);
  console.log("timerStatus",timerStatus);
  
  const [currentTime, setCurrentTime] = useState(0);

    const {
      fetchCustomerDetails,
      loading: fetchLoading,
      error: fetchError,
    } = useCustomer();
  

  useEffect(() => {
    const fetchTicket = async () => {
      if (ticketNumber) {
        const ticketId = parseInt(ticketNumber);
        if (!isNaN(ticketId)) {
          const result = await getTicketDetails(ticketId);
          if (result.success && result.data) {
            setTicket(result.data);
          }
        }
      }
    };

    fetchTicket();
  }, [ticketNumber, getTicketDetails]);

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await fetchCustomerDetails();
      setCustomerDetails(details);
      console.log("details", details);
    };
    fetchDetails();
  }, [ticketNumber]);

  // Fetch timer status
  useEffect(() => {
    const fetchTimerStatus = async () => {
      if (ticketNumber) {
        const ticketId = parseInt(ticketNumber);
        if (!isNaN(ticketId)) {
          const result = await getTimerStatus(ticketId);
          if (result.success && result.data) {
            setTimerStatus(result.data);
          }
        }
      }
    };

    fetchTimerStatus();
  }, [ticketNumber, getTimerStatus]);

  // Update current time every second if timer is running
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const isRunning = timerStatus?.timerStatus === "running" || timerStatus?.canStop === true;
    const isEnded = timerStatus?.timerStatus === "ended" || timerStatus?.timerStatus === "ended";
    
    if (isRunning) {
      // Initialize with elapsed seconds from API
      if (timerStatus?.elapsedSeconds && currentTime === 0) {
        setCurrentTime(timerStatus.elapsedSeconds);
      }
      
      // Continue incrementing
      interval = setInterval(() => {
        setCurrentTime((prev) => prev + 1);
      }, 1000);
    } else if (isEnded && timerStatus?.elapsedSeconds) {
      setCurrentTime(timerStatus.elapsedSeconds);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerStatus?.status, timerStatus?.timerStatus, timerStatus?.canStop, timerStatus?.elapsedSeconds]);

  // Sample ticket data - replace with API call
  const ticket = {
    number: ticketNumber,
    title: `Ticket ${ticketNumber}`,
    description: "Lorem ipsum dolor sit amet consectetur...",
    status: "En cours",
    attachments: [
      { name: "withdrawal_violet.png", date: "Feb 30" },
      { name: "orchestrator_interactive.jpe", date: "Mar 30" },
      { name: "silver_global_direct.jpeg", date: "Mar 30" },
      { name: "mint_capacitor_auto.jpeg", date: "Mar 30" },
    ],
    activities: [
      {
        id: 1,
        date: "Mar 31 2083 02:46:47 GMT+0100",
        message:
          "Lorem ipsum dolor sit amet consectetur. Ut ornare nam aeiram hendunt hac neque. Selectus torquent pirinmut ante portis quam nullis est non nacts.",
        userIcon: profileImage,
        isNegative: false,
      },
      {
        id: 2,
        date: "Mar 31 2083 02:46:47 GMT+0100",
        message:
          "Lorem ipsum dolor sit amet consectetur. Ut ornare nam aeiram hendunt hac neque.",
        userIcon: profileImage,
        isNegative: false,
      },
    ],
  };

  const renderActivite = () => (
    <div className="space-y-4">
      {/* Comment Input */}
      <div className="flex max-sm:flex max-sm:flex-col max-sm:items-start max-sm:w-full gap-3 items-end">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Image src={profileImage} alt="User" width={24} height={24} />
        </div>
        <div className="max-sm:flex max-sm:flex-col max-sm:w-full md:flex-1 flex gap-2">
          <input
            type="text"
            placeholder="Your comment here..."
            className="flex-1 text-black max-sm:text-black max-sm:text-[15px] px-4 py-2 border-2 border-[#9AA4EA] rounded-lg"
          />
          <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
            Envoyer
          </button>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="space-y-4 mt-6 relative">
        {/* Vertical gradient line */}
        
        {ticket.activities.map((activity) => (
          <div key={activity.id} className="flex gap-3 mb-9">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${activity.isNegative ? "bg-yellow-500" : "bg-blue-100"}`}
            >
              <Image
                src={activity.userIcon}
                alt="User"
                width={24}
                height={24}
              />
            </div>
            <div className="flex-1 border-2 border-[#9AA4EA] rounded-lg bg-[#F4F9FF] p-4">
              <p
                className="text-xs  mb-2"
                style={{
                  color: "rgba(139, 171, 196, 1)",
                }}
              >
                {activity.date}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {activity.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPiece = () => (
    <div className="space-y-4">
      {/* File Input */}
      <div className=" flex max-sm:flex max-sm:flex-col max-sm:items-start gap-3 items-end">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Image src={profileImage} alt="User" width={24} height={24} />
        </div>
        <input
          type="text"
          className="flex-1 max-sm:text-black max-sm:text-[15px] max-sm:w-full px-4 py-2 border border-[#9AA4EA] rounded-lg bg-[#F4F9FF] text-[#8C8C8C]"
        />
        <button className="px-6 py-2 bg-cyan-500 text-white max-sm:w-full rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
          Ajouter un fichier
        </button>
      </div>

      {/* Attachments Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {ticket.attachments.map((attachment, index) => (
          <div key={index} className="text-center pb-2 rounded-2xl group cursor-pointer" style={{
            backgroundColor:"#EBF6FF"
          }}>
            <div className="relative mb-2 overflow-hidden rounded-lg  p-4">
              <Image
                src={laptopImage}
                alt={attachment.name}
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-black max-sm:text-[10px] font-semibold  text-center ">
              {attachment.name}
            </p>
            <p className="text-xs text-[#024272]">{attachment.date}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDetails = () => (
    <div className="space-y-4">
      {/* Input Section with Avatar */}
      <div className="flex max-sm:flex max-sm:flex-col max-sm:items-start gap-3 items-end">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Image src={profileImage} alt="User" width={24} height={24} />
        </div>
        <input
          type="text"
          placeholder="Enter additional details..."
          className="flex-1 px-4 py-2 max-sm:text-black max-sm:text-[15px] max-sm:w-full border border-[#9AA4EA] rounded-lg bg-[#F4F9FF] text-[#8C8C8C]"
        />
        <button className="px-6 py-2 max-sm:w-full bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
          Ajouter un fichier
        </button>
      </div>

      {/* Form Fields - 2 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <label className="block text-sm font-semibold text-[#024272] mb-2">
            Nom
          </label>
          <input
            type="text"
            placeholder="Dubuque"
            disabled
            value={customerDetails?.nom}
            className="w-full px-4 py-2 border border-[#9AA4EA] rounded-lg bg-[#F4F9FF] text-[#8C8C8C]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#024272] mb-2">
            Prénom
          </label>
          <input
            type="text"
            placeholder="Efren"
             disabled
            value={customerDetails?.prenom}
            className="w-full px-4 py-2 border border-[#9AA4EA] rounded-lg bg-[#F4F9FF] text-[#8C8C8C]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#024272] mb-2">
            Société
          </label>
          <input
            type="text"
            placeholder="Senior Mobility Specialist"
            disabled
            value={customerDetails?.societe}
            className="w-full px-4 py-2 border border-[#9AA4EA] rounded-lg bg-[#F4F9FF] text-[#8C8C8C]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#024272] mb-2">
            Site web
          </label>
          <input
            type="text"
            placeholder="https://ExceSelor/Mobilit/Specialist.net"
             disabled
            value={customerDetails?.site_web}
            className="w-full px-4 py-2 border border-[#9AA4EA] rounded-lg bg-[#F4F9FF] text-[#8C8C8C]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#024272] mb-2">
            Téléphone
          </label>
          <input
            type="text"
            placeholder="862-352-4409"
            disabled
            value={customerDetails?.telephone}
            className="w-full px-4 py-2 border border-[#9AA4EA] rounded-lg bg-[#F4F9FF] text-[#8C8C8C]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#024272] mb-2">
            E-mail
          </label>
          <input
            type="text"
            placeholder="Julic.Hi@fa@ck.com"
             disabled
            value={customerDetails?.email}
            className="w-full px-4 py-2 border border-[#9AA4EA] rounded-lg bg-[#F4F9FF] text-[#8C8C8C]"
          />
        </div>
      </div>

      {/* Adresse Field - Full Width */}
      <div>
        <label className="block text-sm font-semibold text-[#024272] mb-2">
          Adresse
        </label>
        <input
          type="text"
          placeholder="315 Padi/ Mount East Schambergeripan chester Montengro"
          disabled
            value={customerDetails?.adresse}
          className="w-full px-4 py-2 border border-[#9AA4EA] rounded-lg bg-[#F4F9FF] text-[#8C8C8C]"
        />
      </div>

      {/* Descriptions Section */}
      <div className="space-y-4">

        <div>
          <label className="block text-sm font-semibold text-[#024272] mb-2">
            Description
          </label>
          <textarea
            placeholder="Enter description..."
            disabled
            value={ticket1?.description}
            className="w-full px-4 py-2 border border-[#9AA4EA] rounded-lg bg-[#F4F9FF] text-[#8C8C8C] h-20"
          />
        </div>
      </div>

      {/* Documents Section */}
      <div className="mt-6">
        <label className="block text-sm font-semibold text-[#024272] mb-3">
          Documents
        </label>
        <div className="border-2 border-dashed border-[#9AA4EA] rounded-lg p-6 bg-[#F4F9FF] flex items-center gap-4">
          <div className="flex-shrink-0">
            <Image
                src={DOcumentImage}
                alt="Document Icon"
                width={24}
                height={24}
            />
          </div>
          <div className="flex-1">
            <p className="text-sm max-sm:text-[10px] font-semibold text-[#024272]">architectural_metrics_integrating.pdf</p>
            <p className="text-xs max-sm:text-[10px] text-[#8BABC4]">Drag files here or click to upload</p>
          </div>
          <div className="flex max-sm:flex-col gap-2">
            <button className="p-2 text-[#309DD7] hover:bg-[#EBF6FF] rounded">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a1 1 0 001 1h12a1 1 0 001-1V6a2 2 0 00-2-2H4zm0 6v4a2 2 0 002 2h8a2 2 0 002-2v-4H4z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-2 text-red-400 hover:bg-red-50 rounded">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFAQ = () => (
    <div className="space-y-3">
      {/* Question Input */}
     <div className="flex max-sm:flex max-sm:flex-col max-sm:items-start gap-3 items-end">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Image src={profileImage} alt="User" width={24} height={24} />
        </div>
        <input
          type="text"
          placeholder="Comment connecter mon iPhone sans rajouter mon adresse mail ?"
          className="flex-1 px-4 py-2 max-sm:text-black max-sm:text-[15px] max-sm:w-full border border-[#9AA4EA] rounded-lg bg-[#F4F9FF] text-[#8C8C8C]"
        />
        <button className="px-6 py-2 max-sm:w-full bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
          Chercher une question
        </button>
      </div>

      {/* FAQ Items */}
      <div className="space-y-2 mt-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between px-4 py-3 border border-[#9AA4EA] rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <span className="text-sm text-slate-700">
              La question numéro 180
            </span>
            <span className="text-cyan-500 text-2xl">+</span>
          </div>
        ))}
      </div>
    </div>
  );

  const handleToggleTimer = async () => {
    if (ticketNumber) {
      const ticketId = parseInt(ticketNumber);
      if (!isNaN(ticketId)) {
        setCurrentTime(0); // Reset to allow re-initialization from API
        const result = await toggleTimer(ticketId);
        if (result.success && result.data) {
          setTimerStatus(result.data);
        }
      }
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="min-h-screen pl-5 bg-[#F7FCFF]  p-4 sm:p-6 md:p-8 mb-6">
      <div className="max-w-4xl mx-auto 2xl:max-w-5xl 2xl:ml-16">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-5">
          <div className=" flex justify-between mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#024272] mb-2">
              Ticket {ticketNumber}
            </h1>
            {/* Timer Section */}
            <div className="flex items-center gap-4">
              {/* {(!timerStatus || (timerStatus?.status !== "ended" && timerStatus?.timerStatus !== "ended")) && (
                <button
                  onClick={handleToggleTimer}
                  disabled={timerLoading}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    timerStatus?.status === "running" || timerStatus?.canStop === true
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-green-500 text-white hover:bg-green-600"
                  } ${timerLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {timerLoading ? "..." : timerStatus?.status === "running" || timerStatus?.canStop === true ? "End" : "Start"}
                </button>
              )} */}
              <span
                className="flex items-center justify-center text-xl font-bold text-[#024272]"
                style={{
                  width: 278,
                  height: 79,
                  borderRadius: 10,
                  backgroundColor: "#E6F4FF",
                  opacity: 1,
                }}
              >
                {formatTime(currentTime)}
              </span>
            </div>
          </div>

          {/* Description */}
          <p>{ticket1?.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          {/* Tabs */}
          <div className="mb-8 ml-10 mr-10">
            <div className="grid sm:grid-cols-1 max-sm:justify-center lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5  gap-8 justify-between">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={` px-1 font-semibold text-[22px] text-[#8BABC4] ${
                    activeTab === tab.id
                      ? "text-[#024272] border-2 border-[#309DD7] rounded-lg px-3"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg">
            {activeTab === "activite" && renderActivite()}
            {activeTab === "piece" && renderPiece()}
            {activeTab === "details" && renderDetails()}
            {activeTab === "faq" && renderFAQ()}
          </div>
        </div>
      </div>
    </div>
  );
}
