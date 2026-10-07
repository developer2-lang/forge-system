import React from 'react';
import type { ForgeClient } from '../../types/forge';

interface ClientsSectionProps {
  clients: ForgeClient[];
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ clients }) => {
  return (
    <section className="clients on-dark">
      <p className="clients__head">
        TRUSTED BY <span className="clients__head-accent">INDUSTRY LEADERS</span>
      </p>
      <div className="clients__row">
        {clients.map((client) => (
          <div key={client.id || client.name} className="clogo">
            {client.logo_url ? (
              <img src={client.logo_url} alt={client.name} />
            ) : (
              client.name
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
