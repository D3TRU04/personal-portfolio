import Image from 'next/image';
import type { Entry } from '@/data/experience';

export function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <div>
      {entries.map((entry) => (
        <div key={`${entry.company}-${entry.role}`} className="flex items-center mb-6">
          <Image src={entry.logo} alt={`${entry.company} logo`} width={40} height={40} className="mr-4" />
          <div className="flex-grow">
            <h3 className="font-semibold">{entry.role}</h3>
            <p className="text-secondary">{entry.company}</p>
          </div>
          <p className="text-secondary">{entry.date}</p>
        </div>
      ))}
    </div>
  );
}
