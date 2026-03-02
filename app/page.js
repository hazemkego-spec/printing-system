"use client";
import React, { useState } from 'react';

export default function PrintingApp() {
  // قائمة المدرسين (ممكن نغير الأسعار والأسماء براحتنا)
    const teachers = [
        { name: "اختر المدرس", rate: 0 },
            { name: "مستر محمد (فيزياء)", rate: 0.50 },
                { name: "مستر أحمد (كيمياء)", rate: 0.45 },
                    { name: "مس سارة (إنجليزي)", rate: 0.60 },
                      ];

                        const [selectedTeacher, setSelectedTeacher] = useState(teachers[0]);
                          const [pages, setPages] = useState(0);
                            const [copies, setCopies] = useState(1);

                              const total = pages * copies * selectedTeacher.rate;

                                return (
                                    <div style={{ padding: '15px', direction: 'rtl', textAlign: 'right', fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
                                          <h2 style={{ color: '#2c3e50', textAlign: 'center' }}>🖨️ إدارة مطبعة المعلم</h2>
                                                
                                                      <div style={{ background: 'white', padding: '15px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                                                              
                                                                      <label>اختيار المدرس:</label>
                                                                              <select 
                                                                                        style={inputStyle} 
                                                                                                  onChange={(e) => setSelectedTeacher(teachers.find(t => t.name === e.target.value))}
                                                                                                          >
                                                                                                                    {teachers.map((t) => <option key={t.name} value={t.name}>{t.name}</option>)}
                                                                                                                            </select>

                                                                                                                                    <label>عدد الورق في الملزمة الواحد:</label>
                                                                                                                                            <input type="number" placeholder="0" style={inputStyle} onChange={(e) => setPages(e.target.value)} />

                                                                                                                                                    <label>عدد النسخ (الكمية):</label>
                                                                                                                                                            <input type="number" placeholder="1" style={inputStyle} onChange={(e) => setCopies(e.target.value)} />

                                                                                                                                                                    <div style={{ ...resultBoxStyle, backgroundColor: total > 0 ? '#27ae60' : '#95a5a6' }}>
                                                                                                                                                                              <h3 style={{ margin: 0 }}>الحساب: {total.toFixed(2)} جنيه</h3>
                                                                                                                                                                                        {selectedTeacher.rate > 0 && <small>السعر المتفق عليه: {selectedTeacher.rate} جنيه للورقة</small>}
                                                                                                                                                                                                </div>

                                                                                                                                                                                                        <button style={saveButtonStyle} onClick={() => alert('سيتم ربط الحفظ بقاعدة البيانات قريباً!')}>
                                                                                                                                                                                                                  حفظ العملية في الحساب 💾
                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                      const inputStyle = { width: '100%', padding: '12px', margin: '10px 0 20px 0', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box', fontSize: '16px' };
                                                                                                                                                                                                                                      const resultBoxStyle = { marginTop: '10px', padding: '20px', color: 'white', borderRadius: '10px', textAlign: 'center' };
                                                                                                                                                                                                                                      const saveButtonStyle = { width: '100%', padding: '15px', marginTop: '15px', backgroundColor: '#2980b9', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px' };
                                                                                                                                                                                                                                      