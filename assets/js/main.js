function downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = 'Christian-Aglanu-Resume.pdf';
    link.click();
}