'use client'

import { useState, useEffect, useCallback } from 'react';

const DataTable = () => {
  const [data, setData] = useState<any[]>([]);
  const [lastVisibleId, setLastVisibleId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/fetch?lastVisibleId=${lastVisibleId || ''}`);
      const result = await res.json();
      if (res.ok) {
        setData(prevData => [...prevData, ...result.data]);
        setLastVisibleId(result.newLastVisibleId);
        setHasMore(result.data.length === 50); // If less than 50 items are returned, no more data is available
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
    setLoading(false);
  }, [lastVisibleId]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading || !hasMore) return;
    fetchData();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, fetchData]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Field1</th>
            <th>Field2</th>
            <th>Field3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              {JSON.stringify(item)}
              {/* <td>{item.name}</td>
              <td>{item.field2}</td>
              <td>{item.field3}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default DataTable;