"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Download, ArrowLeft } from "lucide-react"

function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="mb-6 flex items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100 transition-colors"
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Артқа</span>
    </button>
  )
}

export default function PatientsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BackButton />
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">Науқастарға арналған жадынама</h1>

          <div className="mx-auto max-w-4xl space-y-8">
            <Link href="/patients/memo">
              <div className="rounded-lg bg-blue-50 p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border-2 border-blue-300">
                <h2 className="text-xl font-semibold text-blue-700 text-center">📋 Науқастарға арналған жадынама</h2>
                <p className="text-sm text-blue-600 text-center mt-2">Жоспарлы стационарлық емдеуге жатқызу тәртібі</p>
              </div>
            </Link>

            <Link href="/patients/memo">
              <div className="rounded-lg bg-red-50 p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border-2 border-red-300">
                <h2 className="text-xl font-semibold text-red-700 text-center">📄 Бағалар тізімін көру</h2>
                <p className="text-sm text-red-600 text-center mt-2">Барлық медициналық қызметтердің толық бағалары</p>
              </div>
            </Link>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Жоспарлы стационарлық емдеуге жатқызу тәртібі</h2>
              <p className="mb-4 text-sm text-gray-600">
                (ҚР Денсаулық Сақтау және Әлеуметтік Даму министерлігінің РК 29 қыркүйектегі 2015 жылғы №761
                "Стационарлық көмек көрсету ережесін бекіту туралы" заңы)
              </p>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  Емдеуге жатқызу бюросының негізгі мақсаты - Кепілдендірілген тегін медициналық көмектің көлемі
                  шеңберінде жоспарлы емдеуге жатқызарда азаматтардың медициналық ұйымды еркін таңдау, қолжетімділігі
                  мен ашықтығын арттыру құқықтарын қамтамасыз ету.
                </p>
                <p>
                  Денсаулық Сақтаудың Бірыңғай Ақпараттық Жүйелер шеңберінде тәуліктік стационарға жоспарлы емдеуге
                  жатқызу қажет болған жағдайда әрбір Қазақстан Республикасының азаматының, тұрғылықты және тіркелген
                  мекен-жайына қарамастан, медициналық ұйымды таңдауға мүмкіндігі бар.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Бұл не?</h2>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  Емдеуге жатқызу Бюросының порталы - бұл сіздің Республикамыздың кез-келген стационарларындағы алдағы
                  үш күнге бос төсектер туралы ақпаратты ала – алатын интернет-ресурс (https://bg.eisz.kz). Егер Сіз
                  дәрігерден емдеуге жатқызуға арналған коды бар жолдаманы алған болсаңыз, онда Сіз аймақтық және
                  республикалық клиникалардың ағымдағы кезегің қарап, өз кезегіңізді қадағалай аласыз.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">АУРУХАНАҒА ЖАТҚЫЗУ ТӘРТІБІ</h2>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  Жоспарлы емдеуге жатқызу – бұл науқастың созылмалы аурулары, өмір сүру үшін қауіпсіз кезіңде
                  (анықталған жағдайда), жедел дәрігерлік араласуды талап етпейтін жағдайларында дәрігердің ауруханаға
                  емдеуге бағытталуы. Жоспарлы емдеуге жатқызу Емдеуге жатқызу Бюросы порталы арқылы науқастың
                  медициналық ұйымды таңдауына сай бірнеше күн ішінде жүзеге асырылады.
                </p>
                <p>
                  Емдеуге жатқызу Бюросы порталы - Кепілдендірілген тегін медициналық көмектің көлемі шеңберінде
                  науқасты жоспарлы ауруханаға жатқызу жолдамаларын тіркеу, есепке алу, өңдеу және бірыңғай электронды
                  сақтау жүйесі.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Жоспарлы емдеуге жатқызу үшін:</h3>
                <ol className="list-decimal space-y-3 pl-6 text-gray-700">
                  <li>Тері - венерологиялық диспансерінің емхана дәрігеріне тіркелу орны бойынша жолдама алу керек.</li>
                  <li>
                    Емхананың емдеуші дәрігері науқасты қарап, ауруын толық көлемде диагностикалау үшін қажетті
                    зерттеулерді тағайындайды.
                  </li>
                  <li>Емхана жағдайында минималды көлемде (қажетті) зерттеулерден өту керек.</li>
                  <li>
                    Емдеуші дәрігер диспансердің бөлімше меңгерушісімен бірлесе отырып, науқасты емдеуге жатқызу
                    қажеттігі туралы шешім шығарады.
                  </li>
                  <li>
                    Дәрігер жолдаманы ресімдейді және бос төсек – орын болған жағдайда ауруханаға жатқызу кодын және
                    науқасты емдеуге алған күнің көрсете отырып, Емдеуге жатқызу Бюросы порталында науқастың деректерін
                    тіркейді.
                  </li>
                  <li>
                    Дәрігер сіздің деректеріңізді Емдеуге жатқызу Бюросы порталына кіргізгеннен кейін сіздің қолыңызға
                    жеке коды бар жоспарлы емдеуге жатқызуға арналған талон береді. Деректер құпия болып табылады.
                  </li>
                  <li>
                    Өтінім порталда тіркелген кезден бастап 2 күн ішінде аурухана жоспарлы емдеуге жатқызу алдын ала
                    күнін анықтайды.
                  </li>
                  <li>
                    Аурухана емдеуге жатқызу күнін анықтағаннан кейін дәрігер сізге жоспарлы түрде ауруханаларға жіберу
                    жолдамасын береді.
                  </li>
                  <li>
                    Емдеуге жатқызуды күткен мерзімде сіз емхана дәрігерінің байқалуындаболасыз. Үздіксіз бақылау
                    міндетті болып табылады.
                  </li>
                  <li>
                    Сіз ауруханаға жатқызу туралы жолдамадағы көрсетілген мерзімде келуге міндеттісіз. Күтпеген
                    жағдаяттар туындаған жағдайда (басқа жіті аурулары, басқа жаққа кету, билеттің болмауы т. б.)
                    дәрігерді уақытында хабардар ету қажет. Пациент келмеген жағдайда, өтінім күшін жояды.
                  </li>
                </ol>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Ауруханаға жоспарлы емдеуге жатқызу кезінде болуы тиіс мынадай құжаттар:
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 mb-6">
                <li>Жеке куәлігі</li>
                <li>Барлық талдаулар мен диагностикалық зерттеулер нәтижелері</li>
                <li>Емдеуге жатқызу талоны</li>
                <li>Емдеуге жатқызуға арналған жолдама (мөрмен және қолмен расталады)</li>
              </ul>
              <p className="font-semibold text-red-600">
                Бұл ауруханаға жатқызу құжаттар пакеті толық болмаған жағдайда аурухана науқасты емдеуге жатқызудан бас
                тартуға құқылы!!!
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Ауруханадағы көмек көрсету тәртібі</h2>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  Ауруханалық көмек - тәулік бойы медициналық бақылауда жасалатын білікті, мамандандырылған және жоғары
                  мамандандырылған медициналық көмек.
                </p>
                <p>
                  Жоспарлы емдеуге жатқызу талоны – бұл Порталда жоспарлы емделуге жатқызуға тіркеліп және жолданған
                  фактісін растайтын құжатты.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-blue-900">Ескертпе:</h3>
              <p className="text-blue-800">
                Тегін медициналық көмектің кепілді көлемі (ТМККК) аясында қызметтер тегін көрсетілуі тиіс.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md border-2 border-green-200">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">📥 Материалдарды жүктеу</h2>
                <p className="text-gray-600">60 құжатты жүктеп алыңыз (PDF, DOCX, XLSX)</p>
              </div>

              <div className="space-y-3">
                <a
                  href="/downloads/bagalar-tizimi-2025.pdf"
                  download
                  className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex-1 text-left mr-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">1. Бағалар тізімі 2025.pdf</h3>
                    <p className="text-xs text-gray-600">1.51 MB • PDF</p>
                  </div>
                  <Download className="h-5 w-5 text-green-600" />
                </a>
                <a
                  href="/downloads/naukastarga-jadynama.pdf"
                  download
                  className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex-1 text-left mr-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">2. Науқастарға жадынама.pdf</h3>
                    <p className="text-xs text-gray-600">850 KB • PDF</p>
                  </div>
                  <Download className="h-5 w-5 text-green-600" />
                </a>
                <a
                  href="/downloads/kujattar-tizimi.pdf"
                  download
                  className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex-1 text-left mr-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">3. Құжаттар тізімі.pdf</h3>
                    <p className="text-xs text-gray-600">420 KB • PDF</p>
                  </div>
                  <Download className="h-5 w-5 text-green-600" />
                </a>
                <a
                  href="/downloads/bos-tosekter-akparati.xlsx"
                  download
                  className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex-1 text-left mr-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">4. Бос төсектер ақпараты.xlsx</h3>
                    <p className="text-xs text-gray-600">120 KB • XLSX</p>
                  </div>
                  <Download className="h-5 w-5 text-green-600" />
                </a>
                <a
                  href="/downloads/emdeu-jospary.docx"
                  download
                  className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex-1 text-left mr-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">5. Емдеу жоспары.docx</h3>
                    <p className="text-xs text-gray-600">85 KB • DOCX</p>
                  </div>
                  <Download className="h-5 w-5 text-green-600" />
                </a>
                <a
                  href="/downloads/diagnostika-natijeleri.pdf"
                  download
                  className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex-1 text-left mr-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">6. Диагностика нәтижелері.pdf</h3>
                    <p className="text-xs text-gray-600">650 KB • PDF</p>
                  </div>
                  <Download className="h-5 w-5 text-green-600" />
                </a>
                <a
                  href="/downloads/konsultatsiya-boljamy.pdf"
                  download
                  className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex-1 text-left mr-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">7. Консультация бөлімі.pdf</h3>
                    <p className="text-xs text-gray-600">320 KB • PDF</p>
                  </div>
                  <Download className="h-5 w-5 text-green-600" />
                </a>
                <a
                  href="/downloads/talday-zertteu.xlsx"
                  download
                  className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex-1 text-left mr-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">8. Талдау зерттеулер.xlsx</h3>
                    <p className="text-xs text-gray-600">200 KB • XLSX</p>
                  </div>
                  <Download className="h-5 w-5 text-green-600" />
                </a>
                <a
                  href="/downloads/emdeu-protokoly.docx"
                  download
                  className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex-1 text-left mr-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">9. Емдеу протоколы.docx</h3>
                    <p className="text-xs text-gray-600">450 KB • DOCX</p>
                  </div>
                  <Download className="h-5 w-5 text-green-600" />
                </a>
                <a
                  href="/downloads/dariger-joldamasy.pdf"
                  download
                  className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex-1 text-left mr-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">10. Дәрігер жолдамасы.pdf</h3>
                    <p className="text-xs text-gray-600">280 KB • PDF</p>
                  </div>
                  <Download className="h-5 w-5 text-green-600" />
                </a>
              </div>

              <details className="mt-4">
                <summary className="cursor-pointer text-center py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-gray-700">
                  Қалған 50 файлды көрсету
                </summary>
                <div className="mt-3 space-y-3">
                  <a
                    href="/downloads/stasionar-kyzmet.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">11. Стационар қызметтер.pdf</h3>
                      <p className="text-xs text-gray-600">980 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/ambulatorlyk-kyzmet.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">12. Амбулаторлық қызметтер.pdf</h3>
                      <p className="text-xs text-gray-600">750 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/josparly-emdeu.xlsx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">13. Жоспарлы емдеу графигі.xlsx</h3>
                      <p className="text-xs text-gray-600">150 KB • XLSX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/zhedi-emdeu.docx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">14. Жедел емдеу ережелері.docx</h3>
                      <p className="text-xs text-gray-600">340 KB • DOCX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/meditsinalyk-kartalar.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">15. Медициналық карталар.pdf</h3>
                      <p className="text-xs text-gray-600">1.2 MB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/laboratoria-zertteu.xlsx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">16. Лабаратория зерттеулер.xlsx</h3>
                      <p className="text-xs text-gray-600">550 KB • XLSX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/rentgen-akparat.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">17. Рентген ақпараты.pdf</h3>
                      <p className="text-xs text-gray-600">890 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/uzi-zertteu.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">18. УЗИ зерттеулері.pdf</h3>
                      <p className="text-xs text-gray-600">720 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/operatsiya-grafigi.xlsx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">19. Операция графигі.xlsx</h3>
                      <p className="text-xs text-gray-600">180 KB • XLSX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/reanimatsiya-bojmy.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">20. Реанимация бөлімі.pdf</h3>
                      <p className="text-xs text-gray-600">610 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/farmatsiya-bastar.xlsx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">21. Фармация бағалары.xlsx</h3>
                      <p className="text-xs text-gray-600">310 KB • XLSX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/dori-darmek-tizimi.docx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">22. Дәрі-дәрмек тізімі.docx</h3>
                      <p className="text-xs text-gray-600">270 KB • DOCX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/vaktsina-kalendary.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">23. Вакцина календары.pdf</h3>
                      <p className="text-xs text-gray-600">410 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/aldyn-alu-shаralary.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">24. Алдын алу шаралары.pdf</h3>
                      <p className="text-xs text-gray-600">530 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/rehabilitatsiya-bagdarlamasy.docx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">25. Реабилитация бағдарламасы.docx</h3>
                      <p className="text-xs text-gray-600">390 KB • DOCX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/fizioterapiya-kyzmet.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">26. Физиотерапия қызметтер.pdf</h3>
                      <p className="text-xs text-gray-600">470 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/massazh-terapiya.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">27. Массаж терапиясы.pdf</h3>
                      <p className="text-xs text-gray-600">360 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/dietolog-kenes.docx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">28. Диетолог кеңесі.docx</h3>
                      <p className="text-xs text-gray-600">220 KB • DOCX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/tamaқtanu-bagdarlamasy.xlsx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">29. Тамақтану бағдарламасы.xlsx</h3>
                      <p className="text-xs text-gray-600">165 KB • XLSX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/psiholog-koмek.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">30. Психолог көмегі.pdf</h3>
                      <p className="text-xs text-gray-600">295 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/bala-bojmy-kyzmet.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">31. Бала бөлімі қызметтер.pdf</h3>
                      <p className="text-xs text-gray-600">810 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/juldyz-auruhanasy.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">32. Жүкті әйелдер бөлімі.pdf</h3>
                      <p className="text-xs text-gray-600">690 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/ginekologiya-kyzmet.docx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">33. Гинекология қызметтер.docx</h3>
                      <p className="text-xs text-gray-600">380 KB • DOCX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/akusherlik-komek.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">34. Акушерлік көмек.pdf</h3>
                      <p className="text-xs text-gray-600">570 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/urologiya-bojmy.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">35. Урология бөлімі.pdf</h3>
                      <p className="text-xs text-gray-600">490 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/kardiologiya-kyzmet.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">36. Кардиология қызметтер.pdf</h3>
                      <p className="text-xs text-gray-600">630 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/nevrologiya-bojmy.docx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">37. Неврология бөлімі.docx</h3>
                      <p className="text-xs text-gray-600">420 KB • DOCX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/endokrinologiya-kenes.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">38. Эндокринология кеңесі.pdf</h3>
                      <p className="text-xs text-gray-600">510 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/gastroenterologiya.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">39. Гастроэнтерология.pdf</h3>
                      <p className="text-xs text-gray-600">590 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/pulmonologiya-bojmy.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">40. Пульмонология бөлімі.pdf</h3>
                      <p className="text-xs text-gray-600">670 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/onkologiya-kyzmet.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">41. Онкология қызметтер.pdf</h3>
                      <p className="text-xs text-gray-600">770 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/dermatologiya-konsul.docx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">42. Дерматология консультация.docx</h3>
                      <p className="text-xs text-gray-600">330 KB • DOCX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/oftalmologiya-kyzmet.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">43. Офтальмология қызметтер.pdf</h3>
                      <p className="text-xs text-gray-600">440 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/otorinolaringologiya.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">44. Оториноларингология.pdf</h3>
                      <p className="text-xs text-gray-600">520 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/travmatologiya-ortopediya.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">45. Травматология-Ортопедия.pdf</h3>
                      <p className="text-xs text-gray-600">850 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/stomatologiya-kyzmet.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">46. Стоматология қызметтер.pdf</h3>
                      <p className="text-xs text-gray-600">730 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/revmatologiya-bojmy.docx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">47. Ревматология бөлімі.docx</h3>
                      <p className="text-xs text-gray-600">370 KB • DOCX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/nefrologiya-kenes.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">48. Нефрология кеңесі.pdf</h3>
                      <p className="text-xs text-gray-600">480 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/gematologiya-kyzmet.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">49. Гематология қызметтер.pdf</h3>
                      <p className="text-xs text-gray-600">560 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/immunologiya-konsul.xlsx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">50. Иммунология консультация.xlsx</h3>
                      <p className="text-xs text-gray-600">190 KB • XLSX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/allergologiya-boymy.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">51. Аллергология бөлімі.pdf</h3>
                      <p className="text-xs text-gray-600">410 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/infektsiya-bojmy.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">52. Инфекция бөлімі.pdf</h3>
                      <p className="text-xs text-gray-600">790 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/toksikologiya-komek.docx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">53. Токсикология көмегі.docx</h3>
                      <p className="text-xs text-gray-600">310 KB • DOCX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/genetika-kenes.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">54. Генетика кеңесі.pdf</h3>
                      <p className="text-xs text-gray-600">540 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/gerontologiya-kyzmet.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">55. Геронтология қызметтер.pdf</h3>
                      <p className="text-xs text-gray-600">450 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/sportivnaya-meditsina.xlsx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">56. Спорттық медицина.xlsx</h3>
                      <p className="text-xs text-gray-600">210 KB • XLSX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/mediko-sotsialnaya-ekspertiza.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">57. Медико-әлеуметтік сараптама.pdf</h3>
                      <p className="text-xs text-gray-600">620 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/sudebno-meditsinskaya-ekspertiza.docx"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">58. Сот-медициналық сараптама.docx</h3>
                      <p className="text-xs text-gray-600">490 KB • DOCX</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/sanitarno-epidemiologiya.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">59. Санитарлық-эпидемиология.pdf</h3>
                      <p className="text-xs text-gray-600">710 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="/downloads/obschaya-informatsiya-tmy.pdf"
                    download
                    className="group flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-4 transition-all hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex-1 text-left mr-3">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">60. Жалпы ақпарат ТМККК.pdf</h3>
                      <p className="text-xs text-gray-600">950 KB • PDF</p>
                    </div>
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
