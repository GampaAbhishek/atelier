"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import profileImage from "@/public/Header/profileIcon.png";
import laptopImage from '@/public/Dashboard/Ticket/lap.png';
import DOcumentImage from '@/public/History/documentIcon.png';

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
  const ticketNumber = params.ticketNumber;
  const [activeTab, setActiveTab] = useState("activite");

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

  return (
    <div className="min-h-screen pl-5 bg-[#F7FCFF]  p-4 sm:p-6 md:p-8 mb-6">
      <div className="max-w-4xl mx-auto 2xl:max-w-5xl 2xl:ml-16">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-5">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#024272] mb-2">
              Ticket {ticketNumber}
            </h1>
            <span className="text-sm text-[#309DD7]">
              Ouvert de 14h à 18h - Délais de réponse 4h
            </span>
          </div>

          {/* Description */}
          <p className="text-[#0F0A32] text-sm leading-relaxed mb-2">
            Lorem ipsum dolor sit amet consectetur. Ut ornare nam ipsum aenean
            dictumst hac neque. Senectus lorem pharetra velit purus mattis quis
            non a justo. Tellus non eu non lectus. Egestas pretium nunc amet
            elementum.
          </p>
          <p className="text-[#0F0A32] text-sm leading-relaxed mb-2">
            Elementum erat neque habitant ut id enim. Blandit fermentum aliquam
            in pulvinar eleifend in sed aliquam risus. Mauris sed nunc magna in
            enim ut tincidunt. In placerat mattis parturient lacus id eu. Risus
            nulla phasellus volutpat id rhoncus. Quam non pharetra vestibulum
            enim. Turpis ultrices viverra quam blandit lobortis orci. Egestas
            vehicula vitae eget non eu. Enim diam laoreet vitae nam in. Etiam
            pellentesque orci fusce gravida quisque sodales elementum.
          </p>
          <p className="text-[#0F0A32] text-sm leading-relaxed mb-2">
            Nunc elementum tempor ullamcorper adipiscing facilisi eu. Varius ut
            vitae orci ultrices libero morbi erat aliquet. Nunc lacus tempus
            viverra duis vel sagittis. Accumsan nibh auctor libero sodales. Eget
            vitae tortor porta semper hac enim gravida elementum bibendum.
            Pulvinar suspendisse volutpat laoreet et facilisis eget. Mauris
            natoque mauris magna mi euismod. Sapien aliquet orci nibh congue mi
            eget rhoncus blandit accumsan. Magna sit curabitur dignissim risus.
            Cursus lobortis suspendisse in convallis quis non in consequat at.
            Sagittis id porta sed proin. Lectus elementum mi urna nisi. Gravida
            neque nunc sed non amet blandit eros. Diam amet justo ultrices purus
            bibendum. At et fames sed cras porta eget.
          </p>
          <p className="text-[#0F0A32] text-sm leading-relaxed mb-2">
            Et aliquam enim dui cras adipiscing sed venenatis ligula. Ultrices
            mi sapien nunc vulputate. Quam eget urna nulla rutrum ante. Est
            congue interdum et sit. Senectus ut sit quis aliquam adipiscing at.
            Id bibendum in ac donec sed erat magna proin. Orci mi tristique id
            porta porttitor non elit ut et. Et augue varius consectetur id dui
            tortor dolor adipiscing eget. Auctor porttitor augue ut quam eu
            adipiscing malesuada. Id rutrum dui sed ac sagittis. Congue
            ullamcorper urna feugiat dui montes ornare amet gravida adipiscing.
            Pretium sed eros morbi semper enim nulla volutpat purus. Vitae sed
            aliquam nibh at diam egestas aliquam feugiat. Arcu egestas amet
            mauris nulla. Pellentesque euismod a dignissim vitae.
          </p>
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
