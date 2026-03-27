/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState, useRef, useCallback } from 'react';
import TicketCard from './TicketCard';
import type { TicketData } from './ticketsConstants';
import lapImage from '../../../../../public/Dashboard/Ticket/ticketImage.png';
import { getAuthRepository } from '@/app/services/factories/ServiceFactory';

/**
 * Tickets Component
 * Displays a list of tickets in a responsive grid layout
 * Follows SOLID principles for maintainability and scalability
 */
const Tickets: React.FC = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  console.log("tickets",tickets);
  
  const [page, setPage] = useState(0);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalTickets, setTotalTickets] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const observerRef = useRef<HTMLDivElement>(null);

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  const mapApiTicketToTicketData = (ticket: any): TicketData => {
    const statusMap: Record<string, TicketData['status']> = {
      Ouvert: 'En attente',
      Fermé: 'Fermé',
      Résolu: 'Résolu',
      En_attente: 'En attente',
      En_cours: 'En cours',
    };

    const status = statusMap[ticket.status] ?? (ticket.status as TicketData['status']);

    return {
      id: String(ticket.id),
      ticketNumber: ticket.id,
      image: lapImage,
      description: ticket.description || ticket.sujet || '',
      status,
      comment: ticket.sujet || ticket.description || '',
      image_url: ticket.piece_jointe,
    };
  };

  const fetchTickets = async (pageToLoad: number, append: boolean = false) => {
    if (append) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      const authRepo = getAuthRepository();
      const token = authRepo.getAccessToken();
      const customer_id = localStorage.getItem('atelier_customer_id');

      if (!token) {
        setError("Token d'authentification introuvable");
        if (!append) {
          setTickets([]);
          setTotalPages(0);
          setTotalTickets(0);
        }
        return;
      }

      const response = await fetch(
        `${apiBaseUrl}/tickets?page=${pageToLoad}&limit=${limit}&customerId=${customer_id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Erreur API : ${response.status} ${errorBody}`);
      }

      const data = await response.json();

      const newTickets = data.data.map(mapApiTicketToTicketData);

      if (append) {
        setTickets((prev) => [...prev, ...newTickets]);
      } else {
        setTickets(newTickets);
      }

      setTotalTickets(data.pagination?.total ?? 0);
      setTotalPages(data.pagination?.pages ?? 0);
      setPage(data.pagination?.page ?? pageToLoad);

      // Check if there are more pages
      setHasMore((data.pagination?.page ?? pageToLoad) < (data.pagination?.pages ?? 0) - 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      if (!append) {
        setTickets([]);
        setTotalPages(0);
        setTotalTickets(0);
      }
    } finally {
      if (append) {
        setLoadingMore(false);
      } else {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchTickets(0, false);
  }, []);

  const loadMore = useCallback(() => {
    if (!loadingMore && hasMore) {
      const nextPage = page + 1;
      fetchTickets(nextPage, true);
    }
  }, [loadingMore, hasMore, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loadMore]);

  return (
    <section className="flex flex-col pt-6 sm:pt-7 md:pt-8 px-4 sm:px-5 md:px-0">
      {/* Section Title */}
      <h2 className="text-2xl pl-5 sm:text-3xl font-semibold text-gray-900  mb-6 sm:mb-7 md:mb-8">
        Historiques des tickets
      </h2>

      {error && (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {/* Tickets List */}
      <div className="space-y-4 sm:space-y-5 md:space-y-6 h-[50vh] mb-5 overflow-scroll overflow-x-hidden pl-5">
        {loading && tickets.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chargement...</p>
          </div>
        ) : tickets.length > 0 ? (
          tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Aucun ticket disponible</p>
          </div>
        )}
        {/* Intersection Observer Target */}
        {hasMore && (
          <div ref={observerRef} className="text-center py-4">
            {loadingMore ? (
              <p className="text-gray-500">Chargement de plus de tickets...</p>
            ) : (
              <p className="text-gray-500">Faites défiler pour charger plus</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Tickets;