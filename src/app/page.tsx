// export default function Home() {
//   return (
//     <main>
//       <h1>こんにちは、あまのくん！</h1>
//       <p>早く宅建に合格できようお祈り申し上げます</p>
//     </main>
//   )
// }

'use client';

import React from 'react';

// SVGアイコンのコンポーネントを定義します
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function GyoseishoshiHomePage() {
  // ボタンがクリックされたときに実行される関数
  const handleInquiryClick = () => {
    // 「未実装です」というポップアップを表示します
    alert('未実装です');
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-800">鈴木行政書士事務所</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-700 transition">業務内容</a>
            <a href="#" className="text-gray-600 hover:text-blue-700 transition">事務所概要</a>
            <a href="#" className="text-gray-600 hover:text-blue-700 transition">料金案内</a>
          </nav>
          <button 
            onClick={handleInquiryClick}
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition font-semibold"
          >
            お問い合わせ
          </button>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main>
        {/* ヒーローセクション */}
        <section className="bg-blue-800 text-white text-center py-20 px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            あなたの暮らしとビジネスの「困った」を、<br />法務の力で解決します。
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-blue-100">
            相続・遺言から会社設立、許認可申請まで。複雑で面倒な手続きは、すべて当事務所にお任せください。
          </p>
          <button
            onClick={handleInquiryClick}
            className="bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-500 transition duration-300 text-lg shadow-lg transform hover:scale-105"
          >
            初回無料相談を予約する
          </button>
        </section>

        {/* 業務内容セクション */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">主な取り扱い業務</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* 業務カード 1 */}
              <div className="border border-gray-200 p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">相続・遺言</h4>
                <p className="text-gray-600">
                  遺産分割協議書の作成、遺言書の起案・執行など、円満な相続手続きをトータルでサポートします。
                </p>
              </div>
              {/* 業務カード 2 */}
              <div className="border border-gray-200 p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">会社設立・許認可</h4>
                <p className="text-gray-600">
                  株式会社・合同会社の設立から、建設業・飲食店の営業許可まで、事業のスタートを力強く後押しします。
                </p>
              </div>
              {/* 業務カード 3 */}
              <div className="border border-gray-200 p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">ビザ・在留資格</h4>
                <p className="text-gray-600">
                  外国籍の方の就労ビザ、経営・管理ビザ、永住許可申請など、複雑な国際業務に対応します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 当事務所の強みセクション */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-12 text-gray-900">選ばれる3つの理由</h3>
            <div className="flex flex-col md:flex-row justify-center gap-10">
              <div className="flex items-start">
                <CheckCircleIcon />
                <div>
                  <h4 className="text-lg font-semibold">初回相談無料</h4>
                  <p className="text-gray-600">まずはお気軽にご状況をお聞かせください。</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon />
                <div>
                  <h4 className="text-lg font-semibold">明確な料金体系</h4>
                  <p className="text-gray-600">ご依頼前に必ずお見積りを提示します。</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon />
                <div>
                  <h4 className="text-lg font-semibold">土日・夜間対応可</h4>
                  <p className="text-gray-600">お忙しい方でも安心してご相談いただけます。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 鈴木行政書士事務所. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
