import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function Dashboard() {
  const [weight, setWeight] = useState('');
  const [progress, setProgress] = useState<any[]>([]);

  const fetchProgress = async () => {
    const snapshot = await getDocs(collection(db, "progress"));
    const data = snapshot.docs.map(doc => doc.data());
    setProgress(data);
  };

  const saveProgress = async () => {
    await addDoc(collection(db, "progress"), {
      weight,
      date: new Date().toISOString()
    });
    setWeight('');
    fetchProgress();
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Progress Tracker</h2>
      <input
        type="number"
        placeholder="Enter weight"
        value={weight}
        onChange={e => setWeight(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button onClick={saveProgress} className="bg-green-600 text-white px-4 py-1 rounded">Save</button>
      <ul className="mt-4">
        {progress.map((item, idx) => (
          <li key={idx}>📅 {item.date.slice(0, 10)} - ⚖️ {item.weight} kg</li>
        ))}
      </ul>
    </div>
  );
}