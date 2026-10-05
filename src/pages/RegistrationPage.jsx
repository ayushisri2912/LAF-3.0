import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight, 
  Sparkles, 
  Building2, 
  UserCheck, 
  Store, 
  UploadCloud, 
  CheckCircle2, 
  CreditCard, 
  QrCode, 
  ShieldCheck, 
  FileText, 
  HelpCircle, 
  ChevronDown, 
  Info,
  PhoneCall,
  Mail,
  MapPin,
  X,
  Layers,
  Award
} from 'lucide-react';

const RegistrationPage = () => {
  // Mode: 'architect' | 'exhibitor' | 'dual'
  const [activeFormMode, setActiveFormMode] = useState('architect');
  
  // Architect Form State
  const [archStep, setArchStep] = useState(1);
  const [archData, setArchData] = useState({
    title: 'Ar.',
    fullName: '',
    email: '',
    phone: '',
    coaNumber: '',
    firmName: '',
    officeAddress: '',
    residentialAddress: '',
    category: 'Life Member Architect',
    proposerName: '',
    laaNumber: '',
    declaration: false,
    txnId: '',
    chequeNumber: '',
    paymentDate: '',
    bankName: '',
  });

  const [archCoaFile, setArchCoaFile] = useState(null);
  const [archPhotoFile, setArchPhotoFile] = useState(null);
  const [archReceiptFile, setArchReceiptFile] = useState(null);

  // Exhibitor Form State
  const [exhibitorStep, setExhibitorStep] = useState(1);
  const [exhibitorData, setExhibitorData] = useState({
    companyName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    website: '',
    city: '',
    industrySector: 'Luxury Interiors & Decor',
    spaceRequired: 'Executive Stall (9 sqm)',
    specialRequirements: '',
    declaration: false,
    txnId: '',
    paymentDate: '',
    bankName: '',
  });

  const [exhibitorLogoFile, setExhibitorLogoFile] = useState(null);
  const [exhibitorReceiptFile, setExhibitorReceiptFile] = useState(null);

  // Accordion State
  const [activeAccordion, setActiveAccordion] = useState('eligibility');

  // Submit Modal state
  const [submittedModal, setSubmittedModal] = useState(null); // 'architect' | 'exhibitor' | null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleArchInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setArchData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleExhibitorInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setExhibitorData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleArchSubmit = (e) => {
    e.preventDefault();
    setSubmittedModal('architect');
  };

  const handleExhibitorSubmit = (e) => {
    e.preventDefault();
    setSubmittedModal('exhibitor');
  };

  return (
    <div className="min-h-screen bg-[#0E1217] text-white font-sans selection:bg-[#D4AF37]/30 pb-24 relative overflow-hidden">
      
      {/* Background Architectural Grid & Subtle Watermarks */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[160px]" />
        <div className="absolute top-2/3 right-10 w-[500px] h-[400px] bg-amber-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-6">
        
        {/* ================= BREADCRUMBS & TOP NAV ================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-amber-400 transition-colors bg-white/5 border border-white/10 hover:border-amber-500/40 rounded-full px-4 py-2 backdrop-blur-md"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            <Link to="/" className="hover:text-amber-400 transition-colors">LAF 3.0</Link>
            <ChevronRight className="w-3 h-3 text-amber-500" />
            <span className="text-amber-400 font-bold">REGISTRATION PORTAL</span>
          </div>
        </div>

        {/* ================= HERO HEADER ================= */}
        <div className="mb-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 fill-amber-400 animate-pulse" />
            <span>LAF 3.0 OFFICIAL REGISTRATION & DELEGATES CONCLAVE</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight"
          >
            Join North India's Premier <br className="hidden sm:inline" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500">
              Architectural & Lifestyle Conclave
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Register as an <strong className="text-amber-300 font-semibold">Architect Delegate</strong> to join the symposium & membership network, or register as an <strong className="text-amber-300 font-semibold">Exhibitor / Brand Partner</strong> to showcase your products at LAF 3.0.
          </motion.p>

          {/* ================= DUAL FORM MODE TOGGLE SWITCHER ================= */}
          <div className="mt-8 flex items-center justify-center">
            <div className="bg-[#161B22] p-1.5 rounded-2xl border border-[#D4AF37]/30 shadow-2xl flex flex-wrap items-center justify-center gap-2 max-w-full">
              
              {/* Architect Mode Button */}
              <button
                onClick={() => setActiveFormMode('architect')}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFormMode === 'architect'
                    ? 'bg-gradient-to-r from-[#D4AF37] via-amber-400 to-orange-500 text-black shadow-lg shadow-amber-500/20 scale-[1.02]'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Architect Registration</span>
              </button>

              {/* Exhibitor Mode Button */}
              <button
                onClick={() => setActiveFormMode('exhibitor')}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFormMode === 'exhibitor'
                    ? 'bg-gradient-to-r from-[#D4AF37] via-amber-400 to-orange-500 text-black shadow-lg shadow-amber-500/20 scale-[1.02]'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>Exhibitors & Brand Form</span>
              </button>

              {/* Side-by-Side Dual View Button (Desktop) */}
              <button
                onClick={() => setActiveFormMode('dual')}
                className={`hidden lg:flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFormMode === 'dual'
                    ? 'bg-gradient-to-r from-[#D4AF37] via-amber-400 to-orange-500 text-black shadow-lg shadow-amber-500/20 scale-[1.02]'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Dual View (Both Forms)</span>
              </button>

            </div>
          </div>
        </div>

        {/* ================= MAIN DUAL FORM CONTENT CONTAINER ================= */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* LEFT / MAIN FORMS COLUMN */}
          <div className={`${activeFormMode === 'dual' ? 'lg:col-span-12' : 'lg:col-span-8'} transition-all duration-500`}>
            
            <div className={`grid ${activeFormMode === 'dual' ? 'lg:grid-cols-2 gap-8' : 'grid-cols-1'}`}>
              
              {/* ================= ARCHITECT REGISTRATION FORM ================= */}
              {(activeFormMode === 'architect' || activeFormMode === 'dual') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#12161F]/90 backdrop-blur-xl border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Form Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold font-serif text-white tracking-wide">
                          Architect Registration
                        </h2>
                        <p className="text-xs text-neutral-400">
                          Delegates & Lucknow Architects Association Membership
                        </p>
                      </div>
                    </div>
                    
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold uppercase">
                      COA Verified
                    </span>
                  </div>

                  {/* Step Tabs */}
                  <div className="flex items-center justify-between mb-6 bg-black/40 p-1.5 rounded-xl border border-white/5 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setArchStep(1)}
                      className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                        archStep === 1 
                          ? 'bg-[#D4AF37] text-black font-bold shadow-md' 
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Step 1: Personal Details
                    </button>
                    <button
                      type="button"
                      onClick={() => setArchStep(2)}
                      className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                        archStep === 2 
                          ? 'bg-[#D4AF37] text-black font-bold shadow-md' 
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Step 2: Payment & Pay Receipt
                    </button>
                  </div>

                  {/* Form Element */}
                  <form onSubmit={handleArchSubmit} className="space-y-4">
                    
                    {/* STEP 1: PERSONAL & PROFESSIONAL DETAILS */}
                    {archStep === 1 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        {/* Title & Full Name */}
                        <div className="grid grid-cols-12 gap-3">
                          <div className="col-span-4 sm:col-span-3">
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Title
                            </label>
                            <select
                              name="title"
                              value={archData.title}
                              onChange={handleArchInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                            >
                              <option value="Ar.">Ar.</option>
                              <option value="Prof.">Prof.</option>
                              <option value="Dr.">Dr.</option>
                              <option value="Mr.">Mr.</option>
                              <option value="Ms.">Ms.</option>
                            </select>
                          </div>
                          <div className="col-span-8 sm:col-span-9">
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              required
                              placeholder="e.g. Ramesh Kumar Verma"
                              value={archData.fullName}
                              onChange={handleArchInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* COA Number & Category */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              COA Registration No. *
                            </label>
                            <input
                              type="text"
                              name="coaNumber"
                              required
                              placeholder="CA/20XX/XXXXX"
                              value={archData.coaNumber}
                              onChange={handleArchInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Membership Category
                            </label>
                            <select
                              name="category"
                              value={archData.category}
                              onChange={handleArchInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                            >
                              <option value="Life Member Architect">Life Member Architect (LAA)</option>
                              <option value="Executive Member">Executive Member</option>
                              <option value="Associate Architect">Associate Architect Delegate</option>
                              <option value="Student Architect">Student / Emerging Architect</option>
                            </select>
                          </div>
                        </div>

                        {/* Email & Phone */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="architect@domain.com"
                              value={archData.email}
                              onChange={handleArchInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Phone / WhatsApp No. *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              placeholder="+91 98765 43210"
                              value={archData.phone}
                              onChange={handleArchInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Firm / Office Name & Address */}
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                            Firm Name & Office Address *
                          </label>
                          <textarea
                            name="officeAddress"
                            required
                            rows={2}
                            placeholder="Complete Firm Name and Office Address in Lucknow/UP"
                            value={archData.officeAddress}
                            onChange={handleArchInputChange}
                            className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                          />
                        </div>

                        {/* Proposer Name & LAA Number */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Proposer LAA Member Name (Optional)
                            </label>
                            <input
                              type="text"
                              name="proposerName"
                              placeholder="Endorsed by LAA Member"
                              value={archData.proposerName}
                              onChange={handleArchInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              LAA Membership No. (If Existing)
                            </label>
                            <input
                              type="text"
                              name="laaNumber"
                              placeholder="LAA-XXXX"
                              value={archData.laaNumber}
                              onChange={handleArchInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* COA Certificate / ID File Upload */}
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                            Upload COA Certificate / ID Proof
                          </label>
                          <div className="border-2 border-dashed border-neutral-700 hover:border-amber-400 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-black/20 relative">
                            <input
                              type="file"
                              accept="image/*,.pdf"
                              onChange={(e) => setArchCoaFile(e.target.files[0])}
                              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            />
                            <UploadCloud className="w-6 h-6 text-amber-400 mx-auto mb-1" />
                            <span className="text-xs text-neutral-300 block">
                              {archCoaFile ? archCoaFile.name : 'Click or drag COA Certificate file (PDF / JPG)'}
                            </span>
                            <span className="text-[10px] text-neutral-500 mt-0.5 block">Max size: 5MB</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => setArchStep(2)}
                            className="w-full py-3 px-6 rounded-xl bg-[#D4AF37] hover:bg-amber-400 text-black font-bold uppercase tracking-wider text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                          >
                            <span>Proceed to Payment Step 2</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>

                      </motion.div>
                    )}

                    {/* STEP 2: SCAN & PAY & RECEIPT UPLOAD */}
                    {archStep === 2 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        {/* Payment Guidance Box */}
                        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-2">
                          <div className="flex items-center gap-2 font-bold text-amber-400 text-sm">
                            <CreditCard className="w-4 h-4" />
                            <span>Payment Instructions & Bank Account Details</span>
                          </div>
                          <p className="text-neutral-300 text-[11.5px] leading-relaxed">
                            Life Membership / Delegate Fee: <strong className="text-amber-300">₹5,000 + 18% GST (₹900) = ₹5,900/- Total</strong>
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-[10.5px] font-mono bg-black/40 p-2.5 rounded-xl border border-white/5 text-neutral-300">
                            <div>Bank: PNB (Punjab National Bank)</div>
                            <div>A/C: 06871011001027</div>
                            <div>IFSC: PUNB0068710</div>
                            <div>Name: Lucknow Architects Association</div>
                          </div>
                        </div>

                        {/* Payment Details Inputs */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Transaction ID / UTR No. *
                            </label>
                            <input
                              type="text"
                              name="txnId"
                              required
                              placeholder="e.g. UPI/123456789012"
                              value={archData.txnId}
                              onChange={handleArchInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Payment Date
                            </label>
                            <input
                              type="date"
                              name="paymentDate"
                              value={archData.paymentDate}
                              onChange={handleArchInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Name of Bank / Payment App
                            </label>
                            <input
                              type="text"
                              name="bankName"
                              placeholder="GPay / PhonePe / PNB / SBI"
                              value={archData.bankName}
                              onChange={handleArchInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Cheque / Ref No. (If applicable)
                            </label>
                            <input
                              type="text"
                              name="chequeNumber"
                              placeholder="Cheque No."
                              value={archData.chequeNumber}
                              onChange={handleArchInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Upload Receipt */}
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                            Upload Payment Receipt Screenshot / Copy *
                          </label>
                          <div className="border-2 border-dashed border-neutral-700 hover:border-amber-400 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-black/20 relative">
                            <input
                              type="file"
                              required
                              accept="image/*,.pdf"
                              onChange={(e) => setArchReceiptFile(e.target.files[0])}
                              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            />
                            <UploadCloud className="w-6 h-6 text-amber-400 mx-auto mb-1" />
                            <span className="text-xs text-neutral-300 block">
                              {archReceiptFile ? archReceiptFile.name : 'Upload Payment Receipt (Screenshot / PDF)'}
                            </span>
                          </div>
                        </div>

                        {/* Declaration Checkbox */}
                        <div className="flex items-start gap-2.5 pt-2">
                          <input
                            type="checkbox"
                            name="declaration"
                            id="archDeclaration"
                            required
                            checked={archData.declaration}
                            onChange={handleArchInputChange}
                            className="mt-0.5 accent-amber-500 w-4 h-4 rounded cursor-pointer"
                          />
                          <label htmlFor="archDeclaration" className="text-xs text-neutral-300 leading-normal cursor-pointer select-none">
                            I hereby declare that I possess a recognized degree in Architecture and the information provided is accurate to the best of my knowledge.
                          </label>
                        </div>

                        <div className="flex items-center gap-3 pt-3">
                          <button
                            type="button"
                            onClick={() => setArchStep(1)}
                            className="py-3 px-5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-bold uppercase tracking-wider text-xs transition-colors"
                          >
                            Back to Step 1
                          </button>

                          <button
                            type="submit"
                            className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-extrabold uppercase tracking-wider text-xs shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
                          >
                            <Sparkles className="w-4 h-4 fill-black" />
                            <span>Complete Architect Registration</span>
                          </button>
                        </div>

                      </motion.div>
                    )}

                  </form>
                </motion.div>
              )}

              {/* ================= EXHIBITOR REGISTRATION FORM ================= */}
              {(activeFormMode === 'exhibitor' || activeFormMode === 'dual') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: activeFormMode === 'dual' ? 0.15 : 0 }}
                  className="bg-[#12161F]/90 backdrop-blur-xl border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Form Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                        <Store className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold font-serif text-white tracking-wide">
                          Exhibitors & Brand Registration
                        </h2>
                        <p className="text-xs text-neutral-400">
                          Book your Stall & Partner Pavilion at LAF 3.0
                        </p>
                      </div>
                    </div>
                    
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold uppercase">
                      Brand Partner
                    </span>
                  </div>

                  {/* Step Tabs */}
                  <div className="flex items-center justify-between mb-6 bg-black/40 p-1.5 rounded-xl border border-white/5 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setExhibitorStep(1)}
                      className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                        exhibitorStep === 1 
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold shadow-md' 
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Step 1: Brand & Space Details
                    </button>
                    <button
                      type="button"
                      onClick={() => setExhibitorStep(2)}
                      className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                        exhibitorStep === 2 
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold shadow-md' 
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Step 2: Payment & Booking
                    </button>
                  </div>

                  {/* Form Element */}
                  <form onSubmit={handleExhibitorSubmit} className="space-y-4">
                    
                    {/* STEP 1: BRAND & STALL REQUIREMENTS */}
                    {exhibitorStep === 1 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        {/* Company & Representative Name */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Company / Brand Name *
                            </label>
                            <input
                              type="text"
                              name="companyName"
                              required
                              placeholder="e.g. Apex Luxury Lighting & Interiors"
                              value={exhibitorData.companyName}
                              onChange={handleExhibitorInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Contact Person Name *
                            </label>
                            <input
                              type="text"
                              name="contactPerson"
                              required
                              placeholder="e.g. Vikram Singh"
                              value={exhibitorData.contactPerson}
                              onChange={handleExhibitorInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Designation & Email */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Designation *
                            </label>
                            <input
                              type="text"
                              name="designation"
                              required
                              placeholder="e.g. Director / Marketing Lead"
                              value={exhibitorData.designation}
                              onChange={handleExhibitorInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Official Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="info@brand.com"
                              value={exhibitorData.email}
                              onChange={handleExhibitorInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Phone & Website */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Mobile / WhatsApp No. *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              placeholder="+91 98765 00000"
                              value={exhibitorData.phone}
                              onChange={handleExhibitorInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-[#D4AF37]/90 font-mono mb-1">
                              Company Website / Catalog URL
                            </label>
                            <input
                              type="text"
                              name="website"
                              placeholder="https://www.brand.com"
                              value={exhibitorData.website}
                              onChange={handleExhibitorInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Industry Sector & Space Type */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Product Sector / Category
                            </label>
                            <select
                              name="industrySector"
                              value={exhibitorData.industrySector}
                              onChange={handleExhibitorInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                            >
                              <option value="Luxury Interiors & Decor">Luxury Interiors & Decor</option>
                              <option value="Architectural Lighting & Automation">Architectural Lighting & Automation</option>
                              <option value="Structural & Facade Materials">Structural & Facade Materials</option>
                              <option value="Tiles, Bathware & Stone">Tiles, Bathware & Stone</option>
                              <option value="Furniture & Outdoor Solutions">Furniture & Outdoor Solutions</option>
                              <option value="Green Building Tech & HVAC">Green Building Tech & HVAC</option>
                              <option value="Other Premium Products">Other Premium Products</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Stall / Pavilion Space Required
                            </label>
                            <select
                              name="spaceRequired"
                              value={exhibitorData.spaceRequired}
                              onChange={handleExhibitorInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                            >
                              <option value="Executive Stall (9 sqm)">Executive Stall (9 sqm / 3x3m)</option>
                              <option value="Gold Stall (18 sqm)">Gold Stall (18 sqm / 6x3m)</option>
                              <option value="Platinum Pavilion (36 sqm)">Platinum Pavilion (36 sqm)</option>
                              <option value="Custom Open Space / Sponsor Deck">Custom Pavilion / Sponsor Deck</option>
                            </select>
                          </div>
                        </div>

                        {/* Special Requirements */}
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                            Special Display / Power / Height Requirements
                          </label>
                          <textarea
                            name="specialRequirements"
                            rows={2}
                            placeholder="e.g., Require 3-phase 5kW power, extra spotlighting, heavy floor load capacity..."
                            value={exhibitorData.specialRequirements}
                            onChange={handleExhibitorInputChange}
                            className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                          />
                        </div>

                        {/* Brand Logo Upload */}
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                            Upload Brand Logo (Vector / High Res PNG)
                          </label>
                          <div className="border-2 border-dashed border-neutral-700 hover:border-orange-400 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-black/20 relative">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => setExhibitorLogoFile(e.target.files[0])}
                              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            />
                            <UploadCloud className="w-6 h-6 text-orange-400 mx-auto mb-1" />
                            <span className="text-xs text-neutral-300 block">
                              {exhibitorLogoFile ? exhibitorLogoFile.name : 'Upload Brand Logo (PNG / SVG)'}
                            </span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => setExhibitorStep(2)}
                            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-bold uppercase tracking-wider text-xs shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
                          >
                            <span>Proceed to Payment Step 2</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>

                      </motion.div>
                    )}

                    {/* STEP 2: PAYMENT & ADVANCE BOOKING RECEIPT */}
                    {exhibitorStep === 2 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        {/* Exhibitor Payment Box */}
                        <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-xs text-orange-200 space-y-2">
                          <div className="flex items-center gap-2 font-bold text-orange-400 text-sm">
                            <CreditCard className="w-4 h-4" />
                            <span>Stall Token Deposit & Bank Account Details</span>
                          </div>
                          <p className="text-neutral-300 text-[11.5px] leading-relaxed">
                            Advance Stall Booking Token Deposit: <strong className="text-amber-300">₹10,000 / ₹25,000</strong> (Adjustable in final invoice).
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-[10.5px] font-mono bg-black/40 p-2.5 rounded-xl border border-white/5 text-neutral-300">
                            <div>Bank: PNB (Punjab National Bank)</div>
                            <div>A/C: 06871011001027</div>
                            <div>IFSC: PUNB0068710</div>
                            <div>A/C Holder: Lucknow Architects Association</div>
                          </div>
                        </div>

                        {/* Transaction ID & Date */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Transaction ID / UTR No. *
                            </label>
                            <input
                              type="text"
                              name="txnId"
                              required
                              placeholder="e.g. UTR / NEFT Reference No."
                              value={exhibitorData.txnId}
                              onChange={handleExhibitorInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                              Payment Date
                            </label>
                            <input
                              type="date"
                              name="paymentDate"
                              value={exhibitorData.paymentDate}
                              onChange={handleExhibitorInputChange}
                              className="w-full bg-[#1A202C] border border-neutral-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Upload Receipt */}
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-300 mb-1">
                            Upload Payment Confirmation / Bank Receipt *
                          </label>
                          <div className="border-2 border-dashed border-neutral-700 hover:border-orange-400 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-black/20 relative">
                            <input
                              type="file"
                              required
                              accept="image/*,.pdf"
                              onChange={(e) => setExhibitorReceiptFile(e.target.files[0])}
                              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            />
                            <UploadCloud className="w-6 h-6 text-orange-400 mx-auto mb-1" />
                            <span className="text-xs text-neutral-300 block">
                              {exhibitorReceiptFile ? exhibitorReceiptFile.name : 'Upload Payment Receipt Screenshot / PDF'}
                            </span>
                          </div>
                        </div>

                        {/* Declaration Checkbox */}
                        <div className="flex items-start gap-2.5 pt-2">
                          <input
                            type="checkbox"
                            name="declaration"
                            id="exhibitorDeclaration"
                            required
                            checked={exhibitorData.declaration}
                            onChange={handleExhibitorInputChange}
                            className="mt-0.5 accent-orange-500 w-4 h-4 rounded cursor-pointer"
                          />
                          <label htmlFor="exhibitorDeclaration" className="text-xs text-neutral-300 leading-normal cursor-pointer select-none">
                            I declare that our brand agrees to LAF 3.0 exhibition floor guidelines and stall space allocation rules.
                          </label>
                        </div>

                        <div className="flex items-center gap-3 pt-3">
                          <button
                            type="button"
                            onClick={() => setExhibitorStep(1)}
                            className="py-3 px-5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-bold uppercase tracking-wider text-xs transition-colors"
                          >
                            Back to Step 1
                          </button>

                          <button
                            type="submit"
                            className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-extrabold uppercase tracking-wider text-xs shadow-xl shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                          >
                            <Sparkles className="w-4 h-4 fill-black" />
                            <span>Submit Exhibitor Stall Request</span>
                          </button>
                        </div>

                      </motion.div>
                    )}

                  </form>
                </motion.div>
              )}

            </div>

          </div>

          {/* RIGHT SIDEBAR: ACCORDION, PROCESS & MEMBERSHIP BENEFITS */}
          {activeFormMode !== 'dual' && (
            <div className="lg:col-span-4 space-y-6">
              
              {/* ACCORDION INFORMATION BOX */}
              <div className="bg-[#12161F]/90 backdrop-blur-xl border border-[#D4AF37]/30 rounded-3xl p-6 shadow-xl space-y-4">
                
                <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-amber-400 font-serif font-bold text-lg">
                  <FileText className="w-5 h-5 text-amber-400" />
                  <span>Registration & Process Guide</span>
                </div>

                <div className="space-y-3">
                  
                  {/* Accordion Item 1: Eligibility */}
                  <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20">
                    <button
                      type="button"
                      onClick={() => setActiveAccordion(activeAccordion === 'eligibility' ? null : 'eligibility')}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-xs uppercase tracking-wider text-amber-300 hover:bg-white/5 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-400" />
                        Eligibility Criteria
                      </span>
                      <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${activeAccordion === 'eligibility' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeAccordion === 'eligibility' && (
                      <div className="p-4 text-xs text-neutral-300 space-y-2 border-t border-white/5 bg-black/40 leading-relaxed">
                        <ul className="list-disc pl-4 space-y-1 text-neutral-300">
                          <li>Degree in Architecture (B.Arch) from a COA recognized institution/university.</li>
                          <li>Possess valid Council of Architecture (COA) registration number.</li>
                          <li>Practicing or living in Lucknow, UP, or neighboring districts.</li>
                          <li>Endorsement / recommendation by at least one LAA Member (Optional for delegates).</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Accordion Item 2: Membership & Conclave Benefits */}
                  <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20">
                    <button
                      type="button"
                      onClick={() => setActiveAccordion(activeAccordion === 'benefits' ? null : 'benefits')}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-xs uppercase tracking-wider text-amber-300 hover:bg-white/5 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        Delegate & Member Benefits
                      </span>
                      <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${activeAccordion === 'benefits' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeAccordion === 'benefits' && (
                      <div className="p-4 text-xs text-neutral-300 space-y-2 border-t border-white/5 bg-black/40 leading-relaxed">
                        <ul className="list-disc pl-4 space-y-1 text-neutral-300">
                          <li>Access to all 3 Days of LAF 3.0 Conclave, Keynotes & Panel Symposiums.</li>
                          <li>Direct networking with 500+ eminent architects, buyers & government dignitaries.</li>
                          <li>Delegate Kit, Certificate of Participation & CPD points.</li>
                          <li>LAA General Body Meeting (GBM) voting and directory inclusion rights.</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Accordion Item 3: Fee & Bank Details */}
                  <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20">
                    <button
                      type="button"
                      onClick={() => setActiveAccordion(activeAccordion === 'fee' ? null : 'fee')}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-xs uppercase tracking-wider text-amber-300 hover:bg-white/5 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-amber-400" />
                        Fee Details & Bank Info
                      </span>
                      <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${activeAccordion === 'fee' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeAccordion === 'fee' && (
                      <div className="p-4 text-xs text-neutral-300 space-y-2 border-t border-white/5 bg-black/40 leading-relaxed font-mono">
                        <p className="text-amber-300 font-bold">Life Time Membership Fee:</p>
                        <p className="text-neutral-200">Rs. 5000/- + 18% GST (Rs. 900) = <span className="text-amber-400 font-bold">Rs. 5900/-</span></p>
                        <hr className="border-white/10 my-2" />
                        <p className="text-neutral-400">Name of Bank: Punjab National Bank</p>
                        <p className="text-neutral-400">A/C Name: Lucknow Architects Association</p>
                        <p className="text-neutral-400">A/C No.: 06871011001027</p>
                        <p className="text-neutral-400">IFSC Code: PUNB0068710</p>
                      </div>
                    )}
                  </div>

                </div>

              </div>

              {/* HELPLINE & CONTACT CARD */}
              <div className="bg-[#12161F]/90 backdrop-blur-xl border border-[#D4AF37]/30 rounded-3xl p-6 shadow-xl space-y-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold block">
                  ✦ NEED ASSISTANCE?
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  Registration Support Desk
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Have questions regarding COA verification, stall dimensions or payment assistance?
                </p>
                <div className="pt-2 space-y-2 text-xs">
                  <a href="tel:917007973079" className="flex items-center gap-2.5 text-neutral-200 hover:text-amber-400 transition-colors">
                    <PhoneCall className="w-4 h-4 text-amber-400" />
                    <span>+91 70079 73079</span>
                  </a>
                  <a href="mailto:info@lucknowarchitects.com" className="flex items-center gap-2.5 text-neutral-200 hover:text-amber-400 transition-colors">
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>info@lucknowarchitects.com</span>
                  </a>
                  <div className="flex items-start gap-2.5 text-neutral-400 text-[11px] pt-1">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>2/75A, Vibhuti Khand, Gomti Nagar, Lucknow - 226010, UP</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* ================= SUCCESS SUBMITTED MODAL ================= */}
      <AnimatePresence>
        {submittedModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#161B24] border border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center relative shadow-[0_0_50px_rgba(212,175,55,0.25)]"
            >
              <button 
                onClick={() => setSubmittedModal(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-full bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-[10px] font-mono tracking-widest text-amber-400 font-bold uppercase block mb-1">
                REGISTRATION SUBMITTED
              </span>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Thank You for Registering!
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                {submittedModal === 'architect'
                  ? `Your Architect Delegate registration details & payment receipt (Txn: ${archData.txnId || 'Received'}) have been successfully submitted for verification.`
                  : `Your Exhibitor Stall booking request & payment receipt (Txn: ${exhibitorData.txnId || 'Received'}) have been received.`
                }
                Our organizing desk will verify the details and send your official confirmation ticket to your email.
              </p>

              <div className="p-3 bg-black/50 rounded-2xl border border-white/10 text-[11px] font-mono text-neutral-400 mb-6 flex justify-between">
                <span>Status: Under Verification</span>
                <span className="text-amber-400 font-bold">LAF-3.0-REG</span>
              </div>

              <button
                onClick={() => setSubmittedModal(null)}
                className="w-full py-3 px-6 rounded-xl bg-[#D4AF37] hover:bg-amber-400 text-black font-bold uppercase tracking-wider text-xs shadow-lg transition-all"
              >
                Done / Return to Registration
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default RegistrationPage;
