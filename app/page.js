"use client";
import React, { useState } from 'react';

export default function PrintingApp() {
  const teachers = [
    { name: "اختر المدرس", rate: 0 },
    { name: "مستر محمد (فيزياء)", rate: 0.50 },
    { name: "مستر أحمد (كيمياء)", rate: 0.45 },
    { name: "مس سارة (إنجليزي)", rate: 0.60 },
  ];

  const [selectedTeacher, setSelectedTeacher] = useState(teachers[0]);
  const [pages, setPages] = useState("");
  const [copies, setCopies] = useState("");

  const total = Number(pages) * Number(copies) * selectedTeacher.rate;

  return (
    <div style={{ padding: '20px', direction: 'rtl', textAlign: 'right', fontFamily: 'Arial', backgroundColor: '#1a1a1a', minHeight: '100vh', color: 'white' }}>
      
      <h2 style={{ color: '#00ff88', textAlign: 'center', marginBottom: '30px' }}>🖨️ إدارة حسابات المطبعة</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* اختيار المدرس */}
        <div style={sectionStyle}>
          <label style={labelStyle}>👤 اسم المدرس:</label>
          <select 
            style={inputStyle} 
            onChange={(e) => setSelectedTeacher(teachers.find(t => t.name === e.target.value))}
          >
            {teachers.map((t) => <option key={t.name} value={t.name}>{t.name}</option>)}
          </select>
        </div>

        {/* عدد الورق */}
        <div style={sectionStyle}>
          <label style={labelStyle}>📄 عدد الورق (في الملزمة):</label>
          <input 
            type="number" 
            placeholder="اكتب العدد هنا..." 
            style={inputStyle} 
            value={pages}
            onChange={(e) => setPages(e.target.value)} 
          />
        </div>

        {/* عدد النسخ */}
        <div style={sectionStyle}>
          <label style={labelStyle}>🔢 عدد النسخ (الكمية):</label>
          <input 
            type="number" 
            placeholder="اكتب الكمية هنا..." 
            style={inputStyle} 
            value={copies}
            onChange={(e) => setCopies(e.target.value)} 
          />
        </div>

        {/* صندوق النتيجة */}
        <div style={{ ...resultBoxStyle, border: total > 0 ? '2px solid #00ff88' : '2px solid #555' }}>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>إجمالي الحساب:</p>
          <h1 style={{ fontSize: '40px', margin: '10px 0', color: '#00ff88' }}>{total.toFixed(2)} <span style={{fontSize: '20px'}}>جنيه</span></h1>
          {selectedTeacher.rate > 0 && (
            <div style={{ backgroundColor: '#333', padding: '5px', borderRadius: '5px' }}>
              <small>سعر الورقة لهذا المدرس: {selectedTeacher.rate} جنيه</small>
            </div>
          )}
        </div>

        <button style={saveButtonStyle} onClick={() => alert('تم الحفظ (وهمياً) - الخطوة الجاية نربط القاعدة!')}>
          حفظ العملية في الدفتر 💾
        </button>
      </div>
    </div>
  );
}

// تنسيقات مريحة للموبايل وألوان واضحة
const sectionStyle = { display: 'flex', flexDirection: 'column', gap: '8px' };
const labelStyle = { fontSize: '18px', fontWeight: 'bold', color: '#ccc' };
const inputStyle = { 
  width: '100%', 
  padding: '15px', 
  borderRadius: '10px', 
  border: '2px solid #444', 
  backgroundColor: '#2d2d2d', 
  color: 'white', 
  fontSize: '18px',
  outline: 'none'
};
const resultBoxStyle = { 
  marginTop: '10px', 
  padding: '20px', 
  borderRadius: '15px', 
  textAlign: 'center',
  backgroundColor: '#252525'
};
const saveButtonStyle = { 
  width: '100%', 
  padding: '18px', 
  backgroundColor: '#007bff', 
  color: 'white', 
  border: 'none', 
  borderRadius: '12px', 
  fontWeight: 'bold', 
  fontSize: '20px',
  boxShadow: '0 4px 15px rgba(0,123,255,0.3)'
};
