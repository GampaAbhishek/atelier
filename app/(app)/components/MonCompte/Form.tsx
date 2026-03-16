/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/immutability */
"use client";

import React, { useState, useEffect } from "react";
import ProfileImage from "@/public/MonCompte/profileInfo.png";
import Image from "next/image";
import TickMark from "@/public/MonCompte/tickMark.png";
import { useCustomer } from "@/app/hooks/useCustomer";
import { useCustomerUpdate } from "@/app/hooks/useCustomerUpdate";
import type { CustomerUpdatePayload } from "@/app/services/customer/CustomerUpdateService";

function Form() {
  const [formData, setFormData] = useState({
    civite: "",
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    adresse: "",
    codePostal: "",
    ville: "",
    departement: "",
    socialite: "",
    siteWeb: "",
    motDePasseActuel: "",
    nouveauMotDePasse: "",
    alerteEmail: true,
    alerteSMS: false,
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);

  console.log("formData", formData);

  const {
    fetchCustomerDetails,
    loading: fetchLoading,
    error: fetchError,
  } = useCustomer();
  const {
    updateCustomerDetails,
    loading: updateLoading,
    error: updateError,
  } = useCustomerUpdate();

  useEffect(() => {
    async function loadCustomer() {
      const details = await fetchCustomerDetails();
      console.log("details", details);

      if (details) {
        const mapped = {
          civite: details.civilite || "",
          nom: details.nom || "",
          prenom: details.prenom || "",
          telephone: details.telephone || "",
          email: details.email || "",
          adresse: details.adresse || "",
          codePostal: details.code_postal || "",
          ville: details.ville || "",
          departement: details.departement || "",
          socialite: details.societe || "",
          siteWeb: details.site_web || "",
        };
        setFormData((prev) => ({ ...prev, ...mapped }));
        setOriginalData(mapped);
      }
    }
    loadCustomer();
  }, [fetchCustomerDetails]);

  const getChangedFields = (
    original: Record<string, unknown>,
    updated: Record<string, unknown>,
  ) => {
    const changed: any = {};
    Object.keys(updated).forEach((key) => {
      if (original[key] !== undefined && original[key] !== updated[key]) {
        changed[key] = updated[key];
      }
    });
    return changed;
  };

  const [originalData, setOriginalData] = useState({});

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Change password:", {
      email: formData.email,
      motDePasseActuel: formData.motDePasseActuel,
      nouveauMotDePasse: formData.nouveauMotDePasse,
    });
  };

  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Save preferences:", {
      alerteEmail: formData.alerteEmail,
      alerteSMS: formData.alerteSMS,
    });
  };

  const handleUpdateCustomer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const changedFields: {
      civite?: string;
      nom?: string;
      prenom?: string;
      telephone?: string;
      email?: string;
      adresse?: string;
      codePostal?: string;
      ville?: string;
      departement?: string;
      socialite?: string;
      siteWeb?: string;
    } = getChangedFields(originalData, formData);
    if (Object.keys(changedFields).length === 0) return;
    // Map keys to API fields
    const apiPayload = {
      telephone: changedFields?.telephone,
      ville: changedFields?.ville,
      societe: changedFields?.socialite,
      adresse: changedFields?.adresse,
      code_postal: changedFields?.codePostal,
      departement: changedFields?.departement,
      site_web: changedFields.siteWeb,
      nom: changedFields.nom,
      prenom: changedFields.prenom,
      civilite: changedFields.civite,
      email: changedFields.email,
    };
    // Filter out undefined values
    const filteredPayload = Object.fromEntries(
      Object.entries(apiPayload).filter(([_, value]) => value !== undefined),
    ) as CustomerUpdatePayload;
    const updated = await updateCustomerDetails(filteredPayload);
    if (updated) {
      setStatusType("success");
      setStatusMessage("Coordonnées mises à jour avec succès.");
      setTimeout(() => setStatusMessage(null), 5000);

      setFormData((prev) => ({
        ...prev,
        civite: updated.civilite || prev.civite,
        nom: updated.nom || prev.nom,
        prenom: updated.prenom || prev.prenom,
        telephone: updated.telephone || prev.telephone,
        email: updated.email || prev.email,
        adresse: updated.adresse || prev.adresse,
        codePostal: updated.code_postal || prev.codePostal,
        ville: updated.ville || prev.ville,
        departement: updated.departement || prev.departement,
        socialite: updated.societe || prev.socialite,
        siteWeb: updated.site_web || prev.siteWeb,
      }));
      setOriginalData({
        civite: updated.civilite || formData.civite,
        nom: updated.nom || formData.nom,
        prenom: updated.prenom || formData.prenom,
        telephone: updated.telephone || formData.telephone,
        email: updated.email || formData.email,
        adresse: updated.adresse || formData.adresse,
        codePostal: updated.code_postal || formData.codePostal,
        ville: updated.ville || formData.ville,
        departement: updated.departement || formData.departement,
        socialite: updated.societe || formData.socialite,
        siteWeb: updated.site_web || formData.siteWeb,
      });
    } else {
      setStatusType("error");
      setStatusMessage(updateError || "Une erreur est survenue lors de la mise à jour.");
      setTimeout(() => setStatusMessage(null), 5000);
    }
  };

  return (
    <div className="p-10">
      {/* Header */}

      <div className="flex max-sm:flex-col md:flex-col xl:flex-col gap-5">
        <div className="max-sm:flex max-sm:flex-col md:flex md:flex-row gap-5">
          <div className="flex flex-col gap-3">
            <Image
              src={ProfileImage}
              alt="Profile Information"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full">
            {/* Personal Information Section */}
            <form onSubmit={handleUpdateCustomer}>
              {statusMessage && (
                <div
                  className={`mb-6 rounded-md px-4 py-3 text-sm border ${
                    statusType === "success"
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-red-50 text-red-800 border-red-200"
                  }`}
                  role="alert"
                >
                  {statusMessage}
                </div>
              )}
              <div className="mb-10 w-full">
                {/* Row 1: Civité, Nom, Prénom */}
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6 mb-6">
                  <div>
                    <label className="block  text-sm font-medium text-gray-700 mb-2">
                      Civité
                    </label>
                    <select
                      name="civite"
                      value={formData.civite}
                      onChange={handleInputChange}
                      className="w-full bg-white px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="">Sélectionner</option>
                      <option value="m">M.</option>
                      <option value="mme">Mme</option>
                      <option value="mlle">Mlle</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="w-full bg-white text-[#8C8C8C] px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      className="w-full bg-white text-[#8C8C8C]  px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                {/* Row 2: Téléphone, E-mail */}
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-5 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full bg-white  text-[#8C8C8C] px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div className="sm:col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white  text-[#8C8C8C] px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                {/* Row 3: Addresse */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Addresse
                  </label>
                  <input
                    type="text"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleInputChange}
                    className="w-full 2xl:w-[49%] bg-white px-4 text-[#8C8C8C] py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                {/* Row 4: Code Postal, Ville, Département */}
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Code Postal
                    </label>
                    <input
                      type="text"
                      name="codePostal"
                      value={formData.codePostal}
                      onChange={handleInputChange}
                      className="w-full bg-white text-[#8C8C8C] px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ville
                    </label>
                    <input
                      type="text"
                      name="ville"
                      value={formData.ville}
                      onChange={handleInputChange}
                      className="w-full text-[#8C8C8C] bg-white px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Département
                    </label>
                    <input
                      type="text"
                      name="departement"
                      value={formData.departement}
                      onChange={handleInputChange}
                      className="w-full text-[#8C8C8C] bg-white px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Socialite and Site Web */}
              <div className="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-5 mb-10">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    société
                  </label>
                  <input
                    type="text"
                    name="socialite"
                    value={formData.socialite}
                    onChange={handleInputChange}
                    className="w-full bg-white text-[#8C8C8C] px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div className="sm:col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Site web
                  </label>
                  <input
                    type="url"
                    name="siteWeb"
                    value={formData.siteWeb}
                    onChange={handleInputChange}
                    className="w-full bg-white text-[#8C8C8C] px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div className="flex justify-end pb-4 2xl:w-[50%]">
                <button
                  type="submit"
                  className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
                  disabled={updateLoading}
                >
                  Changer mes coordonnées
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Security Section */}
        <div className="border-t border-gray-200 pt-10 mb-10">
          <h2 className="text-lg font-bold text-cyan-500 mb-6">Sécurité</h2>

          <form onSubmit={handleChangePassword}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full 2xl:w-[50%] bg-white text-[#8C8C8C] px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 2xl:gap-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe actuel
                </label>
                <input
                  type="password"
                  name="motDePasseActuel"
                  value={formData.motDePasseActuel}
                  onChange={handleInputChange}
                  className="w-full bg-white text-[#8C8C8C] px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  name="nouveauMotDePasse"
                  value={formData.nouveauMotDePasse}
                  onChange={handleInputChange}
                  className="w-full bg-white text-[#8C8C8C] px-4 py-2 border border-[#9AA4EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div className="flex justify-end 2xl:w-[50%]">
              <button
                type="submit"
                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
              >
                Changer le mot de passe
              </button>
            </div>
          </form>
        </div>

        {/* User Preferences Section */}
        <div className="border-t border-gray-200 pt-10">
          <h2 className="text-lg font-bold text-cyan-500 mb-6">
            Préférences utilisateur
          </h2>

          <form onSubmit={handleSavePreferences}>
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-4">
                Comment souhaiter-vous être alerté ?
              </p>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        alerteEmail: !prev.alerteEmail,
                      }))
                    }
                    className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-white border-2 border-gray-300 rounded hover:border-cyan-500 transition-colors p-0 m-0"
                  >
                    {formData.alerteEmail && (
                      <Image
                        src={TickMark}
                        alt="Email alert enabled"
                        width={20}
                        height={20}
                        className="pointer-events-none"
                      />
                    )}
                  </button>
                  <span className="ml-3 text-sm text-gray-700">
                    Email - Recevoir les mises à jour de vos tickets par email
                  </span>
                </label>
              </div>
            </div>

            <div className="flex justify-end 2xl:w-[50%]">
              <button
                type="submit"
                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
              >
                Enregistrer les modifications
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
