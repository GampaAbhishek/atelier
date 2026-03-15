"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoginPageImage from "../../../public/Login/loginImage.png";
import { useAuth } from "../../hooks/useAuth";

function Login() {
  const router = useRouter();
  const { login, loading, error, validateToken } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      const isValid = await validateToken();
      if (isValid) {
        // Token is valid, redirect to dashboard
        router.push("/dashboard");
      }
    };

    checkAuthStatus();
  }, [validateToken, router]);

  // Handle form submission
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalError(null);

    // Validate inputs
    if (!email.trim()) {
      setLocalError("Veuillez entrer votre e-mail");
      return;
    }

    if (!password.trim()) {
      setLocalError("Veuillez entrer votre mot de passe");
      return;
    }

    try {
      // Call login API
      const response = await login({
        email: email.trim(),
        password,
      });

      // Validate the returned token
      const isValid = await validateToken();

      if (isValid && response.customer) {
        // Token is valid and customer data received, redirect to dashboard
        router.push("/dashboard");
      } else {
        setLocalError("Erreur lors de la validation du token");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erreur de connexion";
      setLocalError(errorMessage);
      console.error("Login error:", err);
    }
  };

  const displayError = error || localError;

  return (
    <div className="min-h-[90vh] bg-[#DCF1F9]">
      <div className="bg-white rounded-2xl p-7 m-3 h-full flex max-md:flex-col">
        <Image
          src={LoginPageImage}
          alt="Login page image"
          className="w-1/2 max-md:w-full md:block"
        />
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center gap-10 p-6 md:p-0">
          <div className="flex flex-col gap-6">
            <h1 className="text-[#1BACE1] text-4xl md:text-7xl md:text-center">
              Se connecter
            </h1>

            {/* Error Message Display */}
            {displayError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                {displayError}
              </div>
            )}

            <form className="flex flex-col gap-6 w-full max-w-sm" onSubmit={handleLogin}>
              <div className="flex flex-col gap-2">
                <label className="text-[#1BACE1] text-sm font-medium">
                  Identifiant ou e-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="border border-[#1BACE1] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1BACE1] disabled:bg-gray-100"
                  placeholder="jean.dupont@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#1BACE1] text-sm font-medium">
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  className="border border-[#1BACE1] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1BACE1] disabled:bg-gray-100"
                  placeholder="Entrez votre mot de passe"
                />
              </div>

              <label className="flex items-center gap-2 text-[#1BACE1] text-sm">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                />
                Se souvenir de moi
              </label>

              <div className="flex flex-col gap-3 justify-end items-start">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#1BACE1] cursor-pointer text-white px-6 rounded-lg py-3 font-medium hover:bg-[#169bc8] transition w-full md:w-auto disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Connexion en cours..." : "SE CONNECTER"}
                </button>

                <a
                  href="/oublier-mot-de-passe"
                  className="text-[#1BACE1] text-sm hover:underline pl-0.5"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
