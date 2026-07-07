// تأثير ظهور العناصر عند التمرير لأسفل (Reveal on Scroll)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('on');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// كائن لتخزين فهارس الصور في النوافذ (إذا تم استخدام سلايدر مستقبلاً)
const imgIndex = {};

// دالة فتح النافذة المنبثقة للمشروع (Modal)
function openModal(id) {
    const modal = document.getElementById('modal-' + id);
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // منع تمرير الصفحة الخلفية
        imgIndex[id] = 0;
    }
}

// دالة إغلاق النافذة المنبثقة للمشروع
function closeModal(id) {
    const modal = document.getElementById('modal-' + id);
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = ''; // إعادة تفعيل التمرير
    }
}