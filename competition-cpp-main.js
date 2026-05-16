// Aggregator: build database from split phase files and provide examLibrary + render functions
const database = [window.phase1, window.phase2, window.phase3, window.phase4, window.phase5, window.phase6].filter(Boolean);
window.database = database;

var examLibrary = {
    PTNK: [
        {
            year: 2024,
            name: "Bộ đề luyện tập chuyên tin C++",
            tags: ["C++", "STL", "DP"],
            description: "Các đề luyện tập được chọn để rèn tư duy thuật toán, cấu trúc dữ liệu và kỹ năng cài đặt bằng C++.",
            realExams: ["PTNK - Dịch mã (nksev)", "PTNK - Số phong phú (nkabd)"]
        },
        {
            year: 2023,
            name: "Thực chiến tổng hợp Chuyên Tin",
            tags: ["Graph", "Greedy", "Prefix Sum"],
            description: "Bộ đề thiên về tối ưu I/O, truy vấn mảng, đồ thị và quy hoạch động cơ bản.",
            realExams: ["PTNK - Xây dựng thành phố (nkcity)", "PTNK - Chuỗi đối xứng (nkpalin)"]
        },
        {
            year: 2022,
            name: "Luyện đề theo chuyên đề",
            tags: ["Math", "Bit", "Search"],
            description: "Tập trung vào các bài toán số học, bitmask và tìm kiếm nhị phân thường gặp trong đề thi chuyên.",
            realExams: ["PTNK - Số không có ước chính phương (nknumfre)", "PTNK - Hội trường (nkrez)"]
        }
    ],
    "Sở GDĐT": [
        {
            year: 2024,
            name: "Đề luyện thi học sinh giỏi và chuyên tin",
            tags: ["BFS", "DFS", "Dijkstra"],
            description: "Nhóm đề thiên về đồ thị, đường đi ngắn nhất và tối ưu hóa mô hình bài toán bằng C++.",
            realExams: ["Sở GDĐT - Mê cung (qbmaze)", "Sở GDĐT - Đi đến trường (qbschool)"]
        },
        {
            year: 2023,
            name: "Đề tổng hợp mảng và chuỗi",
            tags: ["Array", "String", "Prefix Sum"],
            description: "Bài tập xoay quanh prefix sum, xử lý chuỗi, sắp xếp và truy vấn trên mảng.",
            realExams: ["Sở GDĐT - Hình chữ nhật (ts10hcm23b2)", "Sở GDĐT - Trạm thu phát sóng (ts10hcm19b3)"]
        },
        {
            year: 2022,
            name: "Đề luyện tập quy hoạch động",
            tags: ["DP", "LIS", "Knapsack"],
            description: "Các bài quy hoạch động từ cơ bản đến trung bình, phù hợp cho giai đoạn tổng ôn cuối khóa.",
            realExams: ["Sở GDĐT - Bậc thang (vsteps)", "Sở GDĐT - Dãy con tăng dài nhất (liq)"]
        }
    ]
};

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-primary', 'font-medium');
        btn.classList.add('text-slate-500');
    });

    const target = document.getElementById('tab-' + tabName);
    if (target) target.classList.add('active');
    const targetBtn = document.querySelector(`[data-target="${tabName}"]`);
    if (targetBtn) {
        targetBtn.classList.remove('text-slate-500');
        targetBtn.classList.add('text-primary', 'font-medium');
    }

    if (tabName === 'home' && document.getElementById('overview-container').innerHTML.trim().length < 100) {
        renderOverview();
    }
    if (tabName === 'syllabus' && document.getElementById('syllabus-container').innerHTML.trim().length < 100) {
        renderSyllabus();
    }
    if (tabName === 'exams' && document.getElementById('exams-container').innerHTML.trim().length < 100) {
        renderExams();
    }
}

function renderOverview() {
    const container = document.getElementById('overview-container');
    container.innerHTML = database.map(phase => `
        <div class="soft-card rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl cursor-pointer border-l-4" style="border-left-color: var(--phase-color)" onclick="switchTab('syllabus')">
            <div class="flex items-start justify-between mb-4">
                <div>
                    <h3 class="text-lg font-bold ${phase.textClass} font-heading">${phase.title}</h3>
                    <p class="text-sm text-slate-500 mt-1">${phase.time}</p>
                </div>
                <i class="fa-solid ${phase.icon} text-2xl ${phase.textClass}"></i>
            </div>
            <p class="text-slate-700 text-sm leading-relaxed">${phase.desc}</p>
            <div class="mt-4 pt-4 border-t border-slate-200">
                <div class="text-xs text-slate-600">
                    <p><strong>Yêu cầu:</strong> ${phase.requirements}</p>
                    <p class="mt-2"><strong>Chủ đề:</strong> ${phase.topics}</p>
                </div>
            </div>
            <div class="mt-4 text-xs font-semibold text-white ${phase.bgClass} py-2 px-3 rounded-full inline-block">
                ${phase.duration}
            </div>
        </div>
    `).join('');
}

function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    container.innerHTML = database.map(phase => `
        <div class="soft-card rounded-3xl p-6 mb-8 border-l-4 border-l-slate-300">
            <div class="flex items-center gap-3 mb-6">
                <div class="${phase.bgClass} text-white w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md">
                    <i class="fa-solid ${phase.icon}"></i>
                </div>
                <div>
                    <h2 class="text-2xl font-bold ${phase.textClass} font-heading">${phase.title}</h2>
                    <p class="text-sm text-slate-600">${phase.time} • ${phase.duration}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="bg-white rounded-2xl p-4 border border-slate-100">
                    <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Yêu cầu tiên quyết</p>
                    <p class="text-sm text-slate-800 mt-2">${phase.requirements}</p>
                </div>
                <div class="bg-white rounded-2xl p-4 border border-slate-100">
                    <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Chủ đề chính</p>
                    <p class="text-sm text-slate-800 mt-2">${phase.topics}</p>
                </div>
                <div class="bg-white rounded-2xl p-4 border border-slate-100">
                    <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Kết quả đạt được</p>
                    <p class="text-sm text-slate-800 mt-2">${phase.output}</p>
                </div>
            </div>

            <div class="space-y-2">
                ${phase.lessons.map((lesson, idx) => `
                    <details class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <summary class="px-4 py-3 font-semibold cursor-pointer ${phase.textClass} bg-slate-50 hover:bg-slate-100 flex justify-between items-center font-heading">
                            <span>${lesson.session} - ${lesson.name}</span>
                            <i class="fa-solid fa-chevron-down text-xs"></i>
                        </summary>
                        <div class="px-4 py-4 bg-white border-t border-slate-200">
                            <div class="space-y-3">
                                <div>
                                    <p class="text-xs font-bold text-slate-700 uppercase mb-2">Timeline:</p>
                                    <ul class="text-sm text-slate-700 space-y-1">
                                        ${lesson.timeline.map(t => `<li class="flex items-start gap-2"><span class="text-primary">✓</span> ${t}</li>`).join('')}
                                    </ul>
                                </div>
                                ${lesson.code ? `
                                    <div>
                                        <p class="text-xs font-bold text-slate-700 uppercase mb-2">Code Mẫu:</p>
                                        <pre class="code-block"><code>${escapeHtml(lesson.code)}</code></pre>
                                    </div>
                                ` : ''}
                                ${lesson.tasks ? `
                                    <div>
                                        <p class="text-xs font-bold text-slate-700 uppercase mb-2">Nhiệm vụ:</p>
                                        <p class="text-sm text-slate-700 whitespace-pre-line">${escapeHtml(lesson.tasks)}</p>
                                    </div>
                                ` : ''}
                                ${lesson.realExams && lesson.realExams.length ? `
                                    <div class="bg-orange-50 border border-orange-100 p-3 rounded-2xl text-sm text-slate-800">
                                        <p class="font-bold text-orange-700 mb-2">Ứng dụng thực chiến:</p>
                                        <div class="flex flex-wrap gap-2">
                                            ${lesson.realExams.map(real => renderLessonExamRef(real)).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </details>
                `).join('')}
            </div>
        </div>
    `).join('');
}

window.renderSyllabusBase = renderSyllabus;

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

const lessonExamLinks = {
    'Sở GDĐT - Bài 1 (Thường yêu cầu tính toán cơ bản nhưng số rất lớn).': '#exam-so-gd-t-2023-2024-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
    'Sở GDĐT - Các bài toán đếm ước số, số phong phú.': '#exam-so-gd-t-2023-2024-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
    'Sở GDĐT - Các bài toán xử lý con số trong dãy.': '#exam-so-gd-t-2022-2023-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
    'Sở GDĐT - Trạm thu phát sóng (100% ra trong các bài truy vấn).': '#exam-so-gd-t-2023-2024-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
    'Sở GDĐT - Mê cung': '#exam-so-gd-t-2023-2024-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
    'Sở GDĐT - Bậc thang.': '#exam-so-gd-t-2022-2023-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
    'PTNK - Bài toán ghép số': '#exam-ptnk-2023-2024-e-thi-tuyen-sinh-pho-thong-nang-khieu',
    'PTNK - Đếm số lượng cặp phần tử': '#exam-ptnk-2022-2023-e-thi-tuyen-sinh-pho-thong-nang-khieu',
    'PTNK - Bài toán đếm số lượng số nguyên tố (Subtask lớn).': '#exam-ptnk-2023-2024-e-thi-tuyen-sinh-pho-thong-nang-khieu',
    'PTNK - Số không có ước chính phương (nknumfre)': '#exam-ptnk-2022-2023-e-thi-tuyen-sinh-pho-thong-nang-khieu',
    'PTNK - Số phong phú (nkabd)': '#exam-ptnk-2022-2023-e-thi-tuyen-sinh-pho-thong-nang-khieu',
    'PTNK - Truy vấn dãy số (NKSEQ)': '#exam-ptnk-2023-2024-e-thi-tuyen-sinh-pho-thong-nang-khieu',
    'PTNK - Chuỗi tương đồng (NKSTRING)': '#exam-ptnk-2023-2024-e-thi-tuyen-sinh-pho-thong-nang-khieu',
    'Sở GDĐT - CẶP SỐ (PAIRS)': '#exam-so-gd-t-2022-2023-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
    'Sở GDĐT - Vùng ảnh liên thông.': '#exam-so-gd-t-2022-2023-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
    'Sở GDĐT - Bài toán Bậc thang (vsteps)': '#exam-so-gd-t-2022-2023-e-thi-tuyen-sinh-lop-10-chuyen-tin-tp-hcm',
    'Sở GDĐT - Xếp hạng huy chương.': '#exam-chuyen-e-so-gd-t-tong-hop-cac-nam-tuyen-tap-bai-toan-mang-chuoi-o-thi-so-gd-t',
    'Sở GDĐT - Bài toán tính tổng diện tích, vùng ảnh.': '#exam-chuyen-e-so-gd-t-tong-hop-cac-nam-tuyen-tap-bai-toan-mang-chuoi-o-thi-so-gd-t',
    'Sở GDĐT - Vùng ảnh liên thông': '#exam-chuyen-e-so-gd-t-tong-hop-cac-nam-tuyen-tap-bai-toan-mang-chuoi-o-thi-so-gd-t',
    'Sở GDĐT - Trạm thu phát sóng': '#exam-chuyen-e-so-gd-t-tong-hop-cac-nam-tuyen-tap-bai-toan-mang-chuoi-o-thi-so-gd-t',
    'PTNK - Bài toán đếm số lượng số nguyên tố (Subtask lớn).': '#exam-chuyen-e-ptnk-vnoi-tong-hop-nang-cao-tuyen-tap-pho-thong-nang-khieu-vnoi',
    'PTNK - Bài toán ghép chuỗi.': '#exam-chuyen-e-ptnk-vnoi-tong-hop-nang-cao-tuyen-tap-pho-thong-nang-khieu-vnoi',
    'VNOI - Cắt gỗ.': '#exam-chuyen-e-ptnk-vnoi-tong-hop-nang-cao-tuyen-tap-pho-thong-nang-khieu-vnoi',
    'Lê Hồng Phong - Thống kê dữ liệu lớn.': '#exam-chuyen-e-bo-sung-lhp-t-n-classic-kinh-ien-cau-truc-du-lieu-o-thi-cau-truc-map-va-quy-hoach-ong',
    'Trần Đại Nghĩa - Phân chia tài sản': '#exam-chuyen-e-bo-sung-lhp-t-n-classic-kinh-ien-cau-truc-du-lieu-o-thi-cau-truc-map-va-quy-hoach-ong',
    'Các bài toán nhóm bạn bè, mạng lưới giao thông cơ bản': '#exam-chuyen-e-bo-sung-lhp-t-n-classic-kinh-ien-cau-truc-du-lieu-o-thi-cau-truc-map-va-quy-hoach-ong',
    'Bài toán lập lịch dự án, công việc phụ thuộc': '#exam-chuyen-e-bo-sung-lhp-t-n-classic-kinh-ien-cau-truc-du-lieu-o-thi-cau-truc-map-va-quy-hoach-ong'
};
window.lessonExamLinks = lessonExamLinks;

function renderLessonExamRef(real) {
    const label = typeof real === 'string' ? real : (real.label || real.text || 'Bài thi mẫu');
    const href = typeof real === 'object' && real.href ? real.href : lessonExamLinks[label];
    const isPtnk = label.startsWith('PTNK');
    const chipClass = isPtnk
        ? 'border-indigo-200 bg-indigo-50 text-indigo-800 hover:bg-indigo-100 hover:border-indigo-300'
        : 'border-sky-200 bg-sky-50 text-sky-800 hover:bg-sky-100 hover:border-sky-300';
    const iconClass = isPtnk ? 'fa-solid fa-crown text-amber-500' : 'fa-solid fa-building-columns text-sky-500';
    if (href) {
        return `<a href="${href}" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${chipClass} transition text-xs font-semibold shadow-sm">
            <i class="${iconClass} text-[10px]"></i>
            <span>↗ ${escapeHtml(label)}</span>
        </a>`;
    }
    return `<span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-semibold">
        <i class="fa-solid fa-circle-info text-slate-400 text-[10px]"></i>
        <span>✓ ${escapeHtml(label)}</span>
    </span>`;
}

function renderExams() {
    const container = document.getElementById('exams-container');
    let html = '';

    for (const [school, exams] of Object.entries(examLibrary)) {
        const headingHtml = school === 'PTNK'
            ? '🏆 Phổ Thông Năng Khiếu (PTNK)'
            : school === 'Sở GDĐT'
                ? '📚 Sở GD&ĐT TP.HCM'
                : `<i class="fa-solid fa-book-open text-accent-500 mr-2"></i> ${escapeHtml(school)}`;
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b-4 border-primary-500 font-heading">
                    ${school === 'PTNK' ? '🏆 Phổ Thông Năng Khiếu (PTNK)' : '📚 Sở GD&ĐT TP.HCM'}
                </h3>
                    ${headingHtml}
                    ${exams.map(exam => `
                        <div class="soft-card rounded-2xl p-6 border-l-4 border-primary-500 hover:-translate-y-1 transition">
                            <div class="mb-4">
                                <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">Năm: ${exam.year}</p>
                                <h4 class="text-lg font-bold text-slate-900 mt-2 font-heading">${exam.name}</h4>
                            </div>
                            <div class="mb-4">
                                <div class="flex flex-wrap gap-2">
                                    ${exam.tags.map(tag => `
                                        <span class="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-100">${tag}</span>
                                    `).join('')}
                                </div>
                            </div>
                            <details class="mb-4">
                                <summary class="cursor-pointer font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-2">
                                    <i class="fa-solid fa-chevron-right"></i> Xem Chi Tiết
                                </summary>
                                <div class="mt-4 text-sm text-slate-700 bg-slate-50 p-4 rounded-2xl whitespace-pre-wrap border border-slate-100">
                                    ${escapeHtml(exam.description)}
                                </div>
                            </details>
                            ${exam.realExams ? `
                                <div class="bg-accent-50 border border-accent-100 p-3 rounded-2xl text-sm text-slate-800">
                                    <p class="font-bold text-accent-700 mb-2">Ứng dụng thực chiến:</p>
                                    ${exam.realExams.map(real => `<p>✓ ${escapeHtml(real)}</p>`).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

function handleDeepLinkHash() {
    const hash = window.location.hash;
    if (!hash.startsWith('#exam-')) {
        return;
    }

    switchTab('exams');

    let attempts = 0;
    const scrollToTarget = () => {
        const elementId = hash.slice(1);
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.location.hash = hash;
            return;
        }

        if (attempts < 20) {
            attempts += 1;
            requestAnimationFrame(scrollToTarget);
        }
    };

    requestAnimationFrame(scrollToTarget);
}

document.addEventListener('DOMContentLoaded', () => {
    renderOverview();
    handleDeepLinkHash();
});

window.addEventListener('hashchange', handleDeepLinkHash);
