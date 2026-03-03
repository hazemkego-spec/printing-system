"use client";
import React, { useState, useEffect } from 'react';

export default function PrintingApp() {
  const [pages, setPages] = useState("");
  const [copies, setCopies] = useState("");
  const [teacher, setTeacher] = useState("مستر محمد");
  const [rate, setRate] = useState(0.5);
  const [history, setHistory] = useState([]);

  // أول ما البرنامج يفتح، يجيب الداتا القديمة من الموبايل
  useEffect(() => {
    const saved = localStorage.getItem('printing_logs');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const total = Number(pages) * Number(copies) * rate;

  const handleSave = () => {
    if (!pages || !copies) return alert("اكتب الأرقام الأول!");
    
    const newEntry = {
      id: Date.now(),
      teacher,
      details: `${pages} ورقة × ${copies} نسخة`,
      total: total.toFixed(2),
      time: new Date().toLocaleTimeString('ar-EG')
    };

    const updatedHistory = [newEntry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('printing_logs', JSON.stringify(updatedHistory));
    
    // تصفير الخانات بعد الحفظ
    setPages("");
    setCopies("");
    alert("تم التسجيل في الدفتر! ✅");
  };

  const clearAll = () => {
    if(confirm("عايز تمسح كل السجل؟")) {
      setHistory([]);
      localStorage.removeItem('printing_logs');
    }
  };

  return (
    <div style={{ padding: '15px', direction: 'rtl', textAlign: 'right', fontFamily: 'sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>📑 دفتر حسابات المطبعة</h2>

      {/* قسم الإدخال */}
      <div style={{ background: '#fff', padding: '15px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <label>👤 المدرس:</label>
        <select style={inputStyle} onChange={(e) => {
          setTeacher(e.target.value);
          if(e.target.value === "مستر محمد") setRate(0.5);
          if(e.target.value === "مستر أحمد") setRate(0.4);
        }}>
          <option value="مستر محمد">مستر محمد (0.50 ج)</option>
          <option value="مستر أحمد">مستر أحمد (0.40 ج)</option>
        </select>

        <input type="number" placeholder="عدد الورق" style={inputStyle} value={pages} onChange={(e)=>setPages(e.target.value)} />
        <input type="number" placeholder="عدد النسخ" style={inputStyle} value={copies} onChange={(e)=>setCopies(e.target.value)} />

        <div style={{ textAlign: 'center', margin: '15px 0', padding: '10px', background: '#e8f5e9', borderRadius: '8px' }}>
          <h3 style={{ margin: 0, color: '#2e7d32' }}>الإجمالي: {total.toFixed(2)} جنيه</h3>
        </div>

        <button onClick={handleSave} style={btnSave}>حفظ العملية 💾</button>
      </div>

      {/* سجل العمليات */}
      <div style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>📋 سجل اليوم:</h3>
          <button onClick={clearAll} style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>مسح الكل</button>
        </div>
        
        {history.map(item => (
          <div key={item.id} style={cardStyle}>
            <div>
              <strong>{item.teacher}</strong> <br />
              <small style={{ color: '#666' }}>{item.details}</small>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>{item.total} ج</span> <br />
              <small style={{ fontSize: '10px' }}>{item.time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// تنسيقات بسيطة
const inputStyle = { width: '100%', padding: '12px', margin: '8px 0', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' };
const btnSave = { width: '100%', padding: '15px', backgroundColor: '#1a73e8', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold' };
const cardStyle = { display: 'flex', justifyContent: 'space-between', background: '#fff', padding: '10px', borderRadius: '8px', marginBottom: '8px', borderRight: '5px solid #1a73e8' };
