import React from "react";
import { motion } from "framer-motion";
import { IconMail, IconDownload, IconMapPin, IconCheck } from "lucide-react";

// Однофайловый React-компонент портфолио для тех. администратора DayZ
// Требования: TailwindCSS + framer-motion + lucide-react
// Подключите эти зависимости в проекте перед использованием.

export default function DayZAdminPortfolio() {
  const services = [
    {
      title: "Настройка и запуск сервера",
      desc: "Полная настройка сервера DayZ — от профилей до параметров rcon и порта.",
      bullets: ["Оптимизация конфигов", "RCON / автоматический перезапуск", "Мониторинг производительности"]
    },
    {
      title: "Установка и настройка модов",
      desc: "Интеграция модов (Steam Workshop / PWS) с контролем версий и зависимостей.",
      bullets: ["Синхронизация модов", "Патч-скрипты", "Тестирование совместимости"]
    },
    {
      title: "Бэкапы и восстановление",
      desc: "Автоматические и инкрементные бэкапы мира, конфигов и баз данных.",
      bullets: ["Резервные копии по расписанию", "Ручное и автоматическое восстановление"]
    },
    {
      title: "Защита от читов и безопасность",
      desc: "Внедрение anti-cheat решений, логирование и жесткие политики доступа.",
      bullets: ["Мониторинг подозрительного поведения", "Настройка прав доступа", "Харденинг сервера"]
    },
    {
      title: "Скрипты и автоматизация",
      desc: "Lua/C# скрипты, автоматизация задач, управление ареной событий.",
      bullets: ["Автоматические эвенты", "Архитектура плагинов", "CI/CD для модов"]
    }
  ];

  const projects = [
    {
      name: "Public RP Server — " ,
      subtitle: "3k+ игроков в сутки",
      details: "Оптимизация сетевых настроек, перенос на выделенный кластер, внедрение модов контейнеров.",
      tags: ["Оптимизация", "Кластер", "Моды"]
    },
    {
      name: "Custom Survival Mod Pack",
      subtitle: "Pack for PvE/PvP hybrid",
      details: "Полный сбор мод-пака с автозагрузчиком и системой совместимости версий.",
      tags: ["Моды", "Инструмент для установки"]
    },
    {
      name: "Event Automation Toolkit",
      subtitle: "Система эвентов и логики мира",
      details: "Плагин-движок для запуска PvE-эвентов и сами эвенты с трейлерами и наградами.",
      tags: ["Скрипты", "Автоматизация"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Admin DayZ — Илья &quot;IlyAdmin&quot;</h1>
          <p className="text-sm text-gray-400">Тех. администратор серверов DayZ · DevOps · Моды · Оптимизация</p>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#services" className="text-sm hover:underline">Услуги</a>
          <a href="#projects" className="text-sm hover:underline">Проекты</a>
          <a href="#contacts" className="text-sm hover:underline">Контакты</a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 bg-green-600 px-3 py-1 rounded shadow hover:opacity-90"
            download
          >
            <IconDownload size={16} /> Резюме
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <section className="grid md:grid-cols-2 gap-8 items-center py-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold leading-tight">Надёжный админ для вашего DayZ-сервера</h2>
            <p className="mt-4 text-gray-300">Организую, защищу и ускорю ваш проект: стабильные аптаймы, регулярные бэкапы и корректные мод-паки.</p>

            <div className="mt-6 flex items-center gap-3">
              <a href="#contacts" className="inline-flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded">Связаться</a>
              <a href="#projects" className="inline-flex items-center gap-2 border border-gray-700 px-4 py-2 rounded">Портфолио</a>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><IconCheck size={14} /> 99.9% аптайм (целевая)</li>
              <li className="flex items-center gap-2"><IconCheck size={14} /> RCON + мониторинг</li>
              <li className="flex items-center gap-2"><IconCheck size={14} /> Скрипты и плагины</li>
              <li className="flex items-center gap-2"><IconCheck size={14} /> Автобэкап и миграция</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-xl p-4"
          >
            <div className="h-64 rounded-md bg-[url('https://images.unsplash.com/photo-1564869731361-66b3a0d7e9b1?auto=format&fit=crop&w=1200&q=60')] bg-cover bg-center" />
            <div className="mt-4 text-sm text-gray-300">
              <strong>Техническая сводка:</strong>
              <p className="mt-2">Linux (Debian/Ubuntu), контейнеризация Docker, systemd, Ansible, rcon, MySQL/Postgres, скрипты Lua/C#.</p>
            </div>
          </motion.div>
        </section>

        <section id="services" className="mt-12">
          <h3 className="text-2xl font-bold">Услуги</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.article
                key={s.title}
                whileHover={{ y: -6 }}
                className="bg-gray-800 p-5 rounded-md"
              >
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
                <ul className="mt-3 text-xs text-gray-400 space-y-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2"><IconCheck size={14} />{b}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-bold">Проекты</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.div key={p.name} whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-md">
                <h4 className="font-semibold">{p.name} <span className="text-sm text-gray-400">{p.subtitle}</span></h4>
                <p className="mt-2 text-sm text-gray-300">{p.details}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 border border-gray-700 rounded">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <a className="text-sm border px-3 py-1 rounded">Демо</a>
                  <a className="text-sm border px-3 py-1 rounded">Код</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-gray-800 p-6 rounded-md">
          <h3 className="text-2xl font-bold">Технические навыки</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Linux (Debian/Ubuntu)</li>
                <li>Docker · systemd · Ansible</li>
                <li>RCON, мониторинг (Prometheus/Grafana)</li>
                <li>MySQL / Postgres</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Скрипты: Lua, C#, Bash</li>
                <li>CI/CD для модов</li>
                <li>Оптимизация сетевых настроек</li>
                <li>Anti-cheat интеграции</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contacts" className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-bold">Контакты</h3>
            <p className="mt-2 text-sm text-gray-300">Готов обсудить ваш проект, тестовый период и цену. Могу подключиться к вашему серверу для аудита.</p>

            <div className="mt-4 text-sm text-gray-300 space-y-2">
              <div className="flex items-center gap-2"><IconMail size={16} /> <a href="mailto:ilyadmin@example.com">ilyadmin@example.com</a></div>
              <div className="flex items-center gap-2"><IconMapPin size={16} /> Москва, Россия</div>
            </div>

            <form className="mt-6 grid gap-3">
              <input className="bg-gray-900 p-2 rounded border border-gray-700" placeholder="Имя" />
              <input className="bg-gray-900 p-2 rounded border border-gray-700" placeholder="Email" />
              <textarea className="bg-gray-900 p-2 rounded border border-gray-700" rows={4} placeholder="Коротко о проекте" />
              <div className="flex gap-2">
                <button type="button" className="bg-indigo-600 px-4 py-2 rounded">Отправить</button>
                <button type="button" className="border px-4 py-2 rounded">Запросить аудит</button>
              </div>
            </form>
          </div>

          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-bold">Почему я?</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>✅ Более 5 лет опыта в администрировании игровых серверов.</li>
              <li>✅ Сильный упор на стабильность и безопасность.</li>
              <li>✅ Документированная процедура миграций и бэкапов.</li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold">Частые задачи — быстрые решения</h4>
              <ol className="mt-2 list-decimal list-inside text-sm text-gray-300">
                <li>Аудит конфигов и логов</li>
                <li>Оптимизация производительности</li>
                <li>Автоматизация рутины</li>
              </ol>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} IlyAdmin — Тех. администрирование DayZ · Все права защищены
        </footer>
      </main>
    </div>
  );
}
