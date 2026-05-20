// --- 1. DATA: RAW EXAMS ---
const rawExamDatabase = [
    // --- DỮ LIỆU ĐẦY ĐỦ, COPY TỪ tin10.html ---
    // (Dán toàn bộ mảng rawExamDatabase từ tin10.html ở đây)
    {
        "id": "EXAM_KIEN_GIANG_2025",
        "province": "KIÊN GIANG",
        "title": "SỞ GIÁO DỤC VÀ ĐÀO TẠO KỲ THI TUYỂN SINH VÀO LỚP 10 THPT CHUYÊN NĂM HỌC 2025-2026",
        "subject": "MÔN THI: TIN HỌC (chuyên)",
        "duration": "150 phút",
        "questions": [
            { "name": "Bài 1. Tính tiền Taxi (2,5 điểm)", "context": "Tính tổng số tiền thanh toán dựa trên quãng đường và thời gian chờ (Giá cước + Giá dịch vụ) theo bảng giá phân nấc.", "requirement": "Lập trình tính tổng số tiền thanh toán.", "input": "n (số km), t (thời gian chờ)", "output": "Số tiền tương ứng" },
            { "name": "Bài 2. Bộ ba số (2,5 điểm)", "context": "Số tự nhiên n biến đổi bằng cách xóa các chữ số giống nhau. Tìm các bộ ba số abc thỏa mãn a = b + c (b > c).", "requirement": "Biến đổi n và tìm các bộ 3 số thỏa mãn.", "input": "Số tự nhiên n.", "output": "Số n sau biến đổi và các bộ ba tìm được." },
            { "name": "Bài 3. Bội số nguyên tố (2,5 điểm)", "context": "Tìm trong khoảng từ 1 đến n có bao nhiêu số chia hết cho ít nhất một trong k số nguyên tố phân biệt đã cho.", "requirement": "Tìm số lượng số chia hết.", "input": "n, k và k số nguyên tố.", "output": "Số lượng các số tìm được." },
            { "name": "Bài 4. Căn hộ (2,5 điểm)", "context": "Phân bổ m căn hộ cho n khách hàng sao cho diện tích đáp ứng chênh lệch k nhỏ nhất.", "requirement": "Tìm số khách hàng nhận được căn hộ thỏa mãn.", "input": "n, m, k và mảng diện tích mong muốn, diện tích bán.", "output": "Số khách hàng thỏa mãn." }
        ]
    },
    // ... (dán tiếp toàn bộ các object exam còn lại từ tin10.html, như đã trích xuất ở trên) ...
];

// --- HÀM LÀM SẠCH DỮ LIỆU [CITE] ---
const cleanDB = (db) => {
    const regex = /\+\]/g;
    const strip = (str) => typeof str === 'string' ? str.replace(regex, '').trim() : str;
    return JSON.parse(JSON.stringify(db), (key, value) => typeof value === 'string' ? strip(value) : value);
};
const examDatabaseCleaned = cleanDB(rawExamDatabase);

// --- 2. DATA: SYLLABUS PHASES ---
const lesson = (session, name, timeline, code, tasks, realExams = []) => ({ session, name, timeline, code, tasks, realExams });


// --- PHASE DATA (FULL, COPY TỪ tin10.html) ---
const phase1 = /* ...dán đầy đủ object phase1 từ tin10.html... */;
const phase2 = /* ...dán đầy đủ object phase2 từ tin10.html... */;
const phase3 = /* ...dán đầy đủ object phase3 từ tin10.html... */;
const phase4 = /* ...dán đầy đủ object phase4 từ tin10.html... */;
const phase5 = /* ...dán đầy đủ object phase5 từ tin10.html... */;
const phase6 = /* ...dán đầy đủ object phase6 từ tin10.html... */;
const phases = [phase1, phase2, phase3, phase4, phase5, phase6];

// --- 3. RENDERING LOGIC ---
function renderOverview() {
    const container = document.getElementById('overview-container');
    let html = '';
    phases.forEach(phase => {
        html += `
        <div class="soft-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col h-full border-t-4 border-t-${phase.bgClass.replace('bg-', '')}">
            <div class="${phase.lightBgClass} px-6 py-5 border-b border-slate-100 flex justify-between items-center">
                <span class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-xs font-bold ${phase.textClass} uppercase tracking-wider shadow-sm">Giai đoạn ${phase.phaseId}</span>
                <span class="text-sm font-semibold text-slate-500 bg-white/60 px-3 py-1 rounded-full"><i class="fa-regular fa-clock mr-1"></i>${phase.time}</span>
            </div>
            <div class="p-6 flex-grow flex flex-col">
                <div class="flex items-start gap-4 mb-4">
                    <div class="w-12 h-12 rounded-xl ${phase.bgClass} text-white flex items-center justify-center text-xl flex-shrink-0 shadow-md transform group-hover:scale-110 transition-transform">
                        <i class="fa-solid ${phase.icon || 'fa-code'}"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 leading-tight">${phase.title.split(': ')[1] || phase.title}</h3>
                </div>
                <p class="text-slate-600 text-sm mb-6 flex-grow">${phase.desc}</p>
                <button onclick="switchTab('syllabus')" class="mt-6 w-full py-2.5 rounded-xl bg-slate-50 hover:bg-${phase.bgClass.replace('bg-', 'bg-')}/10 text-${phase.textClass.replace('text-', 'text-')}-700 font-semibold text-sm transition-colors border border-slate-200">Xem Chi Tiết Lộ Trình</button>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    let html = '';
    phases.forEach(phase => {
        html += `
        <div class="soft-card rounded-3xl overflow-hidden mb-12 shadow-sm border border-slate-200">
            <div class="${phase.bgClass} px-8 py-6 text-white relative overflow-hidden">
                <div class="absolute -right-10 -top-10 text-white/10 text-9xl"><i class="fa-solid ${phase.icon || 'fa-code'}"></i></div>
                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-3 mb-2">
                        <span class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Phase ${phase.phaseId}</span>
                        <span class="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium"><i class="fa-regular fa-calendar mr-1"></i>${phase.time}</span>
                        <span class="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium"><i class="fa-regular fa-hourglass-half mr-1"></i>${phase.duration}</span>
                    </div>
                    <h3 class="text-2xl font-bold font-heading">${phase.title}</h3>
                </div>
            </div>
            <div class="p-8">
        `;
        phase.lessons.forEach((lesson, index) => {
            let examLinksHTML = '';
            if (lesson.realExams && lesson.realExams.length > 0) {
                examLinksHTML = `
                    <div class="mt-4 pt-4 border-t border-slate-200">
                        <h5 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center"><i class="fa-solid fa-link mr-1.5 text-primary-500"></i>Liên kết đề thi thực chiến</h5>
                        <div class="flex flex-wrap gap-2">
                            ${lesson.realExams.map(ex => `<button onclick="scrollToExam('${ex.id}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-50 text-primary-700 hover:bg-primary-100 hover:text-primary-800 text-xs font-semibold rounded-lg transition-colors border border-primary-100 shadow-sm"><i class="fa-regular fa-file-code"></i> ${ex.text}</button>`).join('')}
                        </div>
                    </div>
                `;
            }

            html += `
                <div class="mb-10 last:mb-0 relative">
                    ${index !== phase.lessons.length - 1 ? '<div class="absolute left-[1.15rem] top-10 bottom-[-2.5rem] w-[2px] bg-slate-100"></div>' : ''}
                    <div class="flex gap-5 relative z-10">
                        <div class="w-10 h-10 rounded-full ${phase.lightBgClass} ${phase.textClass} flex items-center justify-center font-bold flex-shrink-0 border-4 border-white shadow-sm ring-1 ring-slate-100">${index + 1}</div>
                        <div class="flex-grow pt-1">
                            <h4 class="text-lg font-bold text-slate-800 mb-1 flex items-center flex-wrap gap-2">
                                ${lesson.session}: ${lesson.name}
                            </h4>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                                <div class="space-y-4 flex flex-col justify-between">
                                    <div class="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex-grow">
                                        <h5 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center"><i class="fa-regular fa-clock mr-2"></i>Tiến trình giảng dạy</h5>
                                        <ul class="space-y-2">
                                            ${lesson.timeline.map(t => `<li class="text-sm text-slate-700 flex items-start gap-2"><i class="fa-solid fa-chevron-right text-slate-300 mt-1 text-xs"></i><span>${t}</span></li>`).join('')}
                                        </ul>
                                    </div>
                                    <div class="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                                        <h5 class="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2 flex items-center"><i class="fa-solid fa-dumbbell mr-2"></i>Bài tập thực hành</h5>
                                        <p class="text-sm text-amber-800 whitespace-pre-line">${lesson.tasks}</p>
                                    </div>
                                </div>
                                <div class="bg-[#1e1e1e] rounded-2xl p-5 shadow-inner border border-slate-800 flex flex-col h-full">
                                    <div class="flex items-center justify-between mb-3 border-b border-slate-700 pb-3">
                                        <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center"><i class="fa-solid fa-terminal mr-2 text-emerald-400"></i>Code Mẫu / Cấu Trúc C++</h5>
                                        <div class="flex gap-1.5">
                                            <div class="w-3 h-3 rounded-full bg-rose-500"></div>
                                            <div class="w-3 h-3 rounded-full bg-amber-500"></div>
                                            <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                                        </div>
                                    </div>
                                    <pre class="text-[13px] font-mono text-slate-300 whitespace-pre-wrap overflow-x-auto custom-scrollbar flex-grow leading-relaxed"><code>${lesson.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                                </div>
                            </div>
                            ${examLinksHTML}
                        </div>
                    </div>
                </div>
            `;
        });
        html += `</div></div>`;
    });
    container.innerHTML = html;
}

function renderExams() {
    const container = document.getElementById('exams-container');
    let html = '<div class="grid grid-cols-1 gap-8">';
    examDatabaseCleaned.forEach((exam) => {
        html += `
        <div id="${exam.id}" class="exam-card bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-24">
            <div class="bg-slate-50 p-6 border-b border-slate-200">
                <div class="flex flex-wrap items-center gap-3 mb-2">
                    <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">${exam.province}</span>
                    <span class="text-sm text-slate-500 whitespace-nowrap"><i class="fa-regular fa-clock"></i> ${exam.duration || '150 phút'}</span>
                </div>
                <h3 class="text-xl font-bold text-slate-800">${exam.title}</h3>
                ${exam.subject ? `<p class="text-slate-600 mt-1 font-semibold text-sm">${exam.subject}</p>` : ''}
            </div>
            <div class="p-6">
                <h4 class="font-bold text-slate-700 mb-4 flex items-center gap-2 border-b pb-2"><i class="fa-solid fa-list-check text-slate-400"></i> Danh sách bài tập</h4>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        `;
        exam.questions.forEach((q) => {
            html += `
                    <div class="bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                        <h5 class="font-bold text-primary-700 mb-2">${q.name}</h5>
                        <p class="text-sm text-slate-700 mb-3 whitespace-pre-line flex-grow">${q.context || ''}</p>
                        ${q.requirement ? `<p class="text-sm font-semibold text-slate-800 mb-3 p-3 bg-rose-50 border-l-4 border-rose-400 rounded-r-lg"><i class="fa-solid fa-bullseye text-rose-500 mr-1"></i> ${q.requirement}</p>` : ''}
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto pt-3 border-t border-slate-200">
                            <div class="bg-white p-3 rounded-lg border border-slate-200">
                                <p class="text-[10px] font-bold text-slate-400 uppercase mb-1">Input Data</p>
                                <div class="text-xs font-mono text-slate-700 whitespace-pre-wrap">${q.input || 'Theo mô tả'}</div>
                            </div>
                            <div class="bg-white p-3 rounded-lg border border-slate-200">
                                <p class="text-[10px] font-bold text-slate-400 uppercase mb-1">Output Data</p>
                                <div class="text-xs font-mono text-slate-700 whitespace-pre-wrap">${q.output || 'Theo mô tả'}</div>
                            </div>
                        </div>
                    </div>
            `;
        });
        html += `</div></div></div>`;
    });
    html += '</div>';
    container.innerHTML = html;
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active', 'text-primary-700', 'bg-primary-50');
        btn.classList.add('text-slate-500');
    });
    document.getElementById('tab-' + tabId).classList.add('active');
    const activeBtn = document.querySelector(`.nav-btn[data-target="${tabId}"]`);
    if(activeBtn) {
        activeBtn.classList.remove('text-slate-500');
        activeBtn.classList.add('active', 'text-primary-700', 'bg-primary-50');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Jump to exam and highlight it
function scrollToExam(examId) {
    switchTab('exams');
    setTimeout(() => {
        const el = document.getElementById(examId);
        if(el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            el.classList.add('exam-highlight');
            setTimeout(() => {
                el.classList.remove('exam-highlight');
            }, 2500); // Remove highlight after 2.5s
        }
    }, 100);
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
    renderOverview();
    renderSyllabus();
    renderExams();
});
