import React, { useState } from 'react';
import { NodeData } from '../types';

interface HoloModalProps {
  node: NodeData;
  onClose: () => void;
}

export const HoloModal: React.FC<HoloModalProps> = ({ node, onClose }) => {
  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    grade: '',
    parentName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.studentName || !formData.parentName || !formData.phone || !formData.grade) {
      alert("Por favor complete los campos obligatorios.");
      return;
    }

    setFormStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({
          studentName: '',
          age: '',
          grade: '',
          parentName: '',
          phone: '',
          email: '',
          message: ''
        });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const togglePost = (index: number) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-[2000] flex justify-center items-center animate-[fadeIn_0.3s_ease-out] p-4 md:p-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="w-full md:w-[90%] max-w-[1100px] h-full md:h-[85vh] bg-[#141414]/95 border border-[var(--node-color)] rounded-2xl grid grid-cols-1 md:grid-cols-[280px_1fr] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden relative transform transition-transform duration-500 scale-100"
        style={{ '--node-color': node.color } as React.CSSProperties}
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 bg-red-500/20 border border-red-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-orbitron text-xs flex items-center gap-2 hover:bg-red-500 transition-colors z-50 cursor-pointer focus:ring-2 focus:ring-white"
          aria-label="Cerrar modal"
        >
          <i className="fas fa-times" aria-hidden="true"></i> <span className="hidden md:inline">CERRAR</span>
        </button>

        {/* Sidebar (Desktop) */}
        <div className="hidden md:flex flex-col justify-between bg-white/5 p-10 border-r border-white/5 relative overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[var(--node-color)] opacity-5"></div>
          <h1 id="modal-title-desktop" className="text-4xl font-bold font-cinzel text-[var(--node-color)] leading-tight relative z-10" style={{ color: node.color }}>
            {node.name}
          </h1>
          <div className="text-[12rem] opacity-10 text-right text-white absolute -bottom-10 -right-10 rotate-12">
            <i className={`fas ${node.icon}`}></i>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar relative h-full" id="modal-content">
          
          {/* Mobile Header */}
          <div className="md:hidden flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
            <i className={`fas ${node.icon} text-3xl`} style={{ color: node.color }} aria-hidden="true"></i>
            <h1 id="modal-title" className="text-2xl font-bold font-cinzel text-[var(--node-color)]" style={{ color: node.color }}>
              {node.name}
            </h1>
          </div>

          <h2 className="font-orbitron text-xl md:text-2xl text-white mt-0 border-b-2 inline-block pb-2 uppercase mb-4" style={{ borderColor: node.color }}>
            {node.title}
          </h2>
          
          {node.desc && <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">{node.desc}</p>}

          {/* --- DYNAMIC CONTENT RENDERING --- */}

          {/* 1. ABOUT SECTION (History/Mission/Vision) */}
          {node.about && (
            <div className="mb-10 space-y-8 animate-[fadeIn_0.5s]">
              <div className="bg-white/5 p-6 rounded-xl border-l-4 border-[var(--node-color)]" style={{ borderColor: node.color }}>
                <h3 className="font-orbitron text-lg font-bold text-white mb-2">Nuestra Historia</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{node.about.history}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#111] p-5 rounded-lg border border-white/10">
                  <div className="text-[var(--node-color)] text-3xl mb-3" style={{ color: node.color }}><i className="fas fa-rocket"></i></div>
                  <h4 className="font-bold text-white mb-2">Misión</h4>
                  <p className="text-gray-400 text-sm">{node.about.mission}</p>
                </div>
                <div className="bg-[#111] p-5 rounded-lg border border-white/10">
                  <div className="text-[var(--node-color)] text-3xl mb-3" style={{ color: node.color }}><i className="fas fa-eye"></i></div>
                  <h4 className="font-bold text-white mb-2">Visión</h4>
                  <p className="text-gray-400 text-sm">{node.about.vision}</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-3">Nuestros Valores</h4>
                <div className="flex flex-wrap gap-2">
                  {node.about.values.map((val, i) => (
                    <span key={i} className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold border border-white/10">
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. FEATURE CARDS (Salud) */}
          {node.features && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {node.features.map((f, i) => (
                <div key={i} className="bg-white/5 p-5 rounded-lg border-l-4 flex gap-4 hover:bg-white/10 transition-colors" style={{ borderColor: node.color }}>
                  <div className="text-2xl" style={{ color: node.color }}><i className={`fas ${f.icon}`} aria-hidden="true"></i></div>
                  <div>
                    <h3 className="font-bold text-white mb-1 font-orbitron">{f.title}</h3>
                    <p className="text-gray-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. TEAM PROFILES */}
          {node.teamMembers && (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
               {node.teamMembers.map((member, i) => (
                 <div key={i} className="bg-[#111] rounded-xl overflow-hidden border border-white/10 hover:border-[var(--node-color)] transition-colors group" style={{ '--node-color': node.color } as React.CSSProperties}>
                   <div className="h-32 bg-gray-800 relative overflow-hidden">
                     <img 
                        src={member.image} 
                        alt={`Foto de ${member.name}`} 
                        loading="lazy"
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity will-change-opacity" 
                      />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                   </div>
                   <div className="p-4 relative -mt-8">
                     <div className="w-12 h-1 bg-[var(--node-color)] mb-3" style={{ backgroundColor: node.color }}></div>
                     <h3 className="text-white font-bold text-lg">{member.name}</h3>
                     <p className="text-[var(--node-color)] text-xs font-orbitron mb-2" style={{ color: node.color }}>{member.role}</p>
                     <p className="text-gray-400 text-xs">{member.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          )}

          {/* 4. BLOG POSTS */}
          {node.blogPosts && (
            <div className="space-y-6 mb-8">
              <h3 className="text-white font-bold text-lg mb-4 border-b border-white/10 pb-2"><i className="fas fa-newspaper mr-2" aria-hidden="true"></i> Blog Educativo Gilgal</h3>
              {node.blogPosts.map((post, i) => (
                <article key={i} className="bg-white/5 p-5 rounded-lg hover:bg-white/10 transition-colors border border-white/5 group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-[#9ACD32] font-bold font-body text-lg md:text-xl group-hover:text-white transition-colors">{post.title}</h4>
                    <span className="text-xs text-gray-500 bg-black px-2 py-1 rounded border border-white/10 whitespace-nowrap ml-4">{post.date}</span>
                  </div>
                  
                  <div className={`text-gray-300 text-sm leading-relaxed ${expandedPost === i ? '' : 'line-clamp-3'}`}>
                    {expandedPost === i && post.content ? (
                      <div className="whitespace-pre-line animate-[fadeIn_0.5s]">
                        <p className="font-semibold mb-4 italic text-gray-400">{post.excerpt}</p>
                        {post.content}
                      </div>
                    ) : (
                      post.excerpt
                    )}
                  </div>

                  <button 
                    onClick={() => togglePost(i)}
                    className="mt-3 text-xs font-orbitron text-[var(--node-color)] hover:text-white transition-colors flex items-center gap-2 uppercase tracking-wider border border-white/10 px-3 py-1 rounded hover:bg-white/10"
                    style={{ color: expandedPost === i ? '#fff' : node.color }}
                  >
                    {expandedPost === i ? 'Leer menos' : 'Leer artículo completo'} <i className={`fas ${expandedPost === i ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </button>
                </article>
              ))}
            </div>
          )}

          {/* 5. GALLERY GRID */}
          {node.galleryImages && (
            <div className="mb-8">
              <h3 className="text-white font-bold text-lg mb-4"><i className="fas fa-camera mr-2" aria-hidden="true"></i> Galería Institucional</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {node.galleryImages.map((img, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden relative group">
                    <img 
                      src={img} 
                      alt={`Galería imagen ${i + 1}`} 
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 will-change-transform" 
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <i className="fas fa-search-plus text-white text-xl" aria-hidden="true"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. FLIP CARDS (Intelligences) */}
          {node.type === 'intel' && node.content && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {node.content.map((item, idx) => (
                <div key={idx} className="bg-transparent h-[200px] perspective-1000 group cursor-pointer" tabIndex={0}>
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 group-focus:rotate-y-180">
                    
                    {/* Front */}
                    <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center p-6 rounded-xl bg-white/5 border border-white/10 text-center shadow-lg">
                      <i className={`fas ${item.i} text-3xl mb-3`} style={{ color: node.color }} aria-hidden="true"></i>
                      <h3 className="text-white font-bold text-lg font-orbitron">{item.t}</h3>
                      <div className="w-8 h-1 bg-white/20 mt-2 rounded"></div>
                    </div>

                    {/* Back */}
                    <div 
                      className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center items-center p-6 rounded-xl bg-[#111] border text-center"
                      style={{ borderColor: node.color }}
                    >
                      <p className="text-gray-300 text-sm">{item.d}</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 7. PRE-REGISTRATION FORM */}
          {node.showForm && (
            <div className="mt-6 bg-white/5 p-6 rounded-xl border border-white/10">
              {formStatus === 'success' ? (
                <div className="text-center py-10 animate-pulse" role="alert">
                  <i className="fas fa-check-circle text-5xl text-[#76FF03] mb-4" aria-hidden="true"></i>
                  <h3 className="text-2xl font-bold text-white">¡Pre-Inscripción Enviada!</h3>
                  <p className="text-gray-400 mt-2">Gracias por elegir UEP Gilgal. Te contactaremos a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2 mb-2">
                    <h3 className="text-white font-bold border-b border-white/10 pb-2">Formulario de Admisión</h3>
                    <p className="text-xs text-gray-500 mt-1">Campos marcados con * son obligatorios.</p>
                  </div>
                  
                  {/* Parent Info */}
                  <div>
                    <label htmlFor="parentName" className="block text-xs text-gray-400 mb-1">Nombre del Representante *</label>
                    <input id="parentName" required name="parentName" value={formData.parentName} onChange={handleInputChange} type="text" placeholder="Nombre y Apellido" className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-white focus:border-[var(--node-color)] outline-none transition-colors" style={{ '--node-color': node.color } as React.CSSProperties} />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-xs text-gray-400 mb-1">Teléfono / WhatsApp *</label>
                    <input id="phone" required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="04XX-XXXXXXX" className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-white focus:border-[var(--node-color)] outline-none transition-colors" style={{ '--node-color': node.color } as React.CSSProperties} />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-xs text-gray-400 mb-1">Correo Electrónico</label>
                    <input id="email" name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="correo@ejemplo.com" className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-white focus:border-[var(--node-color)] outline-none transition-colors" style={{ '--node-color': node.color } as React.CSSProperties} />
                  </div>

                  {/* Student Info */}
                  <div>
                    <label htmlFor="studentName" className="block text-xs text-gray-400 mb-1">Nombre del Estudiante *</label>
                    <input id="studentName" required name="studentName" value={formData.studentName} onChange={handleInputChange} type="text" placeholder="Nombre Completo" className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-white focus:border-[var(--node-color)] outline-none transition-colors" style={{ '--node-color': node.color } as React.CSSProperties} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="age" className="block text-xs text-gray-400 mb-1">Edad *</label>
                      <input id="age" required name="age" value={formData.age} onChange={handleInputChange} type="number" min="1" max="18" className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-white focus:border-[var(--node-color)] outline-none transition-colors" style={{ '--node-color': node.color } as React.CSSProperties} />
                    </div>
                    <div>
                      <label htmlFor="grade" className="block text-xs text-gray-400 mb-1">Grado/Año *</label>
                      <select id="grade" required name="grade" value={formData.grade} onChange={handleInputChange} className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-white focus:border-[var(--node-color)] outline-none transition-colors" style={{ '--node-color': node.color } as React.CSSProperties}>
                        <option value="">Seleccione</option>
                        <option value="Maternal">Maternal</option>
                        <option value="Preescolar 1">Preescolar 1</option>
                        <option value="Preescolar 2">Preescolar 2</option>
                        <option value="Preescolar 3">Preescolar 3</option>
                        <option value="1er Grado">1er Grado</option>
                        <option value="2do Grado">2do Grado</option>
                        <option value="3er Grado">3er Grado</option>
                        <option value="4to Grado">4to Grado</option>
                        <option value="5to Grado">5to Grado</option>
                        <option value="6to Grado">6to Grado</option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-xs text-gray-400 mb-1">Mensaje Adicional / Observaciones</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-white focus:border-[var(--node-color)] outline-none transition-colors" style={{ '--node-color': node.color } as React.CSSProperties}></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'sending'}
                    className="md:col-span-2 mt-4 bg-[var(--node-color)] text-black font-bold py-3 rounded hover:opacity-90 transition-opacity flex justify-center items-center gap-2 focus:ring-2 focus:ring-white"
                    style={{ backgroundColor: node.color }}
                  >
                    {formStatus === 'sending' ? <i className="fas fa-circle-notch fa-spin" aria-hidden="true"></i> : <i className="fas fa-paper-plane" aria-hidden="true"></i>}
                    ENVIAR SOLICITUD
                  </button>
                </form>
              )}
            </div>
          )}

          {/* 8. MAP EMBED */}
          {node.showMap && (
            <div className="mt-8">
              <h3 className="text-white font-bold text-lg mb-4"><i className="fas fa-map-marker-alt mr-2" aria-hidden="true"></i> Nuestra Ubicación</h3>
              <div className="w-full h-[250px] rounded-xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                <iframe 
                  title="Mapa de Ubicación UEP Gilgal"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.687650536384!2d-66.8929036!3d10.2866608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a8c6310107681%3A0x9c6727c9d84d404!2sC%C3%BAa%2C%20Miranda!5e0!3m2!1ses!2sve!4v1696940000000!5m2!1ses!2sve" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">Calle la Florida #32, Cúa 1211, Miranda, Venezuela</p>
            </div>
          )}

          {/* Generic HTML Fallback (if used) */}
          {node.htmlContent && !node.features && !node.showForm && (
            <div className="mt-6">{node.htmlContent}</div>
          )}

        </div>
      </div>
    </div>
  );
};