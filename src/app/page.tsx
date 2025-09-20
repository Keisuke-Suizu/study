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

// パチンコ玉アイコンのコンポーネント
const PachinkoBallIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-8 w-8 ${className}`}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 18a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

export default function PachinkasuGyoseishoshiPage() {
  // ボタンクリック時のポップアップ
  const handleButtonClick = () => {
    alert('未実装です（今日は確変中なので、合わせ延長でお願いします！）');
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-white selection:bg-yellow-500 selection:text-black">
      {/* ヘッダー */}
      <header className="bg-black/50 backdrop-blur-sm shadow-lg shadow-yellow-500/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-wider text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            パチンカス行政書士事務所
          </h1>
          <button 
            onClick={handleButtonClick}
            className="bg-red-600 text-white px-5 py-2 rounded-md border-2 border-red-400 hover:bg-red-700 transition font-bold shadow-md hover:shadow-lg"
          >
            相談する
          </button>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main>
        {/* ヒーローセクション */}
        <section className="text-center py-24 px-6 bg-cover bg-center" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png')" }}>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-lg">
            行政の壁を突破する、俺のST！
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-300 font-semibold">
            「確変より確実！」 「依頼はハマらせません！」
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-400">
            書類もパチンコも、連チャンが命！
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-gradient-to-b from-yellow-400 to-yellow-600 text-black font-bold py-4 px-12 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition duration-300 text-xl shadow-lg shadow-yellow-500/20 transform hover:scale-110"
          >
            大当たり(初回相談)を引く
          </button>
        </section>

        {/* 特徴セクション */}
        <section className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-6">
            <h3 className="text-4xl font-bold text-center mb-16 text-yellow-300">当事務所の揺るぎない特徴</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 特徴カード 1 */}
              <div className="bg-gray-900 border-2 border-yellow-500/30 p-8 rounded-lg shadow-lg text-center hover:border-yellow-500 transition">
                <h4 className="text-xl font-bold text-yellow-400 mb-3">相談場所</h4>
                <p className="text-gray-300">
                  パチンコ屋の休憩コーナーで。コーヒー片手に対応します。
                </p>
              </div>
              {/* 特徴カード 2 */}
              <div className="bg-gray-900 border-2 border-yellow-500/30 p-8 rounded-lg shadow-lg text-center hover:border-yellow-500 transition">
                <h4 className="text-xl font-bold text-yellow-400 mb-3">書類記入</h4>
                <p className="text-gray-300">
                  玉箱（ドル箱）の上で。安定感には自信があります。
                </p>
              </div>
              {/* 特徴カード 3 */}
              <div className="bg-gray-900 border-2 border-yellow-500/30 p-8 rounded-lg shadow-lg text-center hover:border-yellow-500 transition">
                <h4 className="text-xl font-bold text-yellow-400 mb-3">報酬体系</h4>
                <p className="text-gray-300">
                  現金、または特殊景品（商品券）も可。柔軟に対応。
                </p>
              </div>
              {/* 特徴カード 4 */}
              <div className="bg-gray-900 border-2 border-yellow-500/30 p-8 rounded-lg shadow-lg text-center hover:border-yellow-500 transition">
                <h4 className="text-xl font-bold text-yellow-400 mb-3">営業時間</h4>
                <p className="text-gray-300">
                  新台入替以外の平日。朝イチの並びは優先します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* キャッチコピーセクション */}
        <section className="py-20 text-center">
            <div className="container mx-auto px-6">
                <PachinkoBallIcon className="text-yellow-400 mx-auto mb-4 animate-bounce" />
                <blockquote className="text-3xl md:text-4xl font-bold italic text-white max-w-4xl mx-auto">
                    “依頼人の権利、俺が守る！<br/>
                    <span className="text-red-500 underline decoration-wavy">財布の中身は守れない！</span>”
                </blockquote>
                <cite className="block mt-4 text-lg text-gray-400">- 代表行政書士 鈴木 -</cite>
            </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-black text-gray-500 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">印鑑ケースの中にはなぜかパチンコ玉が混じっています。</p>
          <p>&copy; 2025 パチンカス行政書士事務所. All Rights Reserved (たぶん).</p>
        </div>
      </footer>
    </div>
  );
}
