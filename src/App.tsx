import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Sparkles,
} from 'lucide-react';
import Section from './components/Section';
import ServiceCard from './components/ServiceCard';
import { CONTACT_EMAIL, CONTACT_WECHAT } from './lib/profile';

const navItems = [
  { label: '介绍', href: '#about' },
  { label: '辅导', href: '#tutoring' },
  { label: '合作', href: '#work' },
  { label: '网站制作', href: '#websites' },
  { label: '联系', href: '#contact' },
];

const tutoringItems = [
  '小初高数学辅导',
  '高中政治辅导',
  'C++ 入门教学',
];

const skills = ['C++', 'Python', 'Web 开发', 'AI 工具'];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(125,211,252,0.16),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(134,239,172,0.12),transparent_28%),linear-gradient(180deg,#06070a_0%,#0d1117_55%,#06070a_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/78 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3" aria-label="返回首页">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-sm font-semibold text-accent-cyan shadow-glow transition group-hover:border-accent-cyan/40">
              ZH
            </span>
            <span className="hidden text-sm font-medium tracking-wide text-slate-300 sm:block">
              Zhang Haosen
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-accent-cyan/40 hover:bg-accent-cyan/10"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">联系我</span>
          </a>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fadeUp">
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-300">
              <Sparkles className="h-4 w-4 text-accent-gold" />
              <span>大学生开发者 / 课程辅导 / 网站制作</span>
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              张昊森
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              专注学习、教学与开发实践，用清晰的沟通和可靠的执行，把知识讲明白，把页面做扎实。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#tutoring" className="btn-primary">
                课程辅导服务
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="btn-secondary">
                兼职合作
              </a>
              <a href="#contact" className="btn-secondary">
                联系我
              </a>
            </div>
          </div>

          <div
            className="animate-fadeUp rounded-lg border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/30 backdrop-blur"
            style={{ animationDelay: '120ms' }}
          >
            <div className="aspect-[4/3] w-full rounded-md border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(125,211,252,0.22),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(134,239,172,0.18),transparent_50%),linear-gradient(145deg,#0b1220_0%,#0f172a_45%,#0a0f19_100%)] p-6">
              <div className="rounded-md border border-white/15 bg-black/25 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Personal Brand Site</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Zhang Haosen</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Tutoring, part-time web projects, and reliable collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="About" title="真实、稳定、持续成长的计算机学生">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel">
            <GraduationCap className="mb-5 h-7 w-7 text-accent-cyan" />
            <h3 className="text-xl font-semibold text-white">山西大学 · 计算机科学与技术</h3>
            <p className="mt-4 leading-8 text-slate-300">
              我目前就读于山西大学计算机科学与技术专业，方向为先进计算。平时关注基础能力、工程实践和工具效率，也愿意把自己的学习方法整理出来，帮助同学更稳地理解知识。
            </p>
          </div>
          <div className="panel">
            <Code2 className="mb-5 h-7 w-7 text-accent-green" />
            <h3 className="text-xl font-semibold text-white">技术兴趣与实践方向</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-5 leading-8 text-slate-300">
              我更重视把基础知识用起来：从 C++ 编程入门、Python 工具脚本，到响应式网页和 AI 工具辅助学习，持续把想法变成可交付的作品。
            </p>
          </div>
        </div>
        <div className="mt-5 panel">
          <h3 className="text-xl font-semibold text-white">荣誉</h3>
          <div className="mt-4 inline-flex items-center rounded-md border border-accent-gold/30 bg-accent-gold/10 px-3 py-2 text-sm text-slate-100">
            蓝桥杯省奖
          </div>
        </div>
      </Section>

      <Section id="tutoring" eyebrow="Tutoring" title="课程辅导服务：讲清楚，也练到位">
        <div className="grid gap-5 lg:grid-cols-3">
          {tutoringItems.map((item) => (
            <ServiceCard key={item} icon={BookOpen} title={item}>
              一对一沟通学习情况，结合基础漏洞、题型训练和复盘方法，帮助学生建立更清晰的解题思路。
            </ServiceCard>
          ))}
        </div>
        <div className="mt-5 panel">
          <h3 className="text-lg font-semibold text-white">服务区域</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {['临汾', '太原'].map((city) => (
              <span key={city} className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-slate-200">
                {city}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-5 rounded-lg border border-accent-cyan/20 bg-accent-cyan/10 p-5 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-semibold text-white">可线上沟通，注重提分与思维训练</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">适合需要补基础、提效率、建立学习节奏的初高中学生，也适合想入门 C++ 的同学。</p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            联系预约
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </Section>

      <Section id="work" eyebrow="Part-time" title="兼职与合作：小项目也认真交付">
        <div className="grid gap-5 md:grid-cols-3">
          <ServiceCard icon={MonitorSmartphone} title="网站开发">
            个人主页、简历网站、展示页等，适合学生、课程辅导老师、社团、小型项目快速建立线上入口。
          </ServiceCard>
          <ServiceCard icon={Code2} title="前端小项目">
            可承接页面开发、交互组件、响应式适配和简单工具类页面，沟通需求后评估周期。
          </ServiceCard>
          <ServiceCard icon={BriefcaseBusiness} title="校园合作项目">
            欢迎课程项目、校园活动、社团展示与外包合作需求，按目标拆解并推进落地。
          </ServiceCard>
        </div>
      </Section>

      <Section id="websites" eyebrow="Website Service" title="个人网站制作服务">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="panel">
            <h3 className="text-xl font-semibold text-white">可制作类型</h3>
            <div className="mt-5 grid gap-3">
              {['个人主页网站', '简历展示网站', '课程辅导宣传页'].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.05] px-4 py-3">
                  <span className="text-slate-200">{item}</span>
                  <ArrowRight className="h-4 w-4 text-accent-cyan" />
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <h3 className="text-xl font-semibold text-white">交付特点</h3>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-cyan" />简洁高级设计，内容重点清楚，适合直接用于展示和接单。</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-green" />手机端适配，微信转发和移动访问时也保持专业观感。</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-gold" />可快速上线部署到 Vercel，让页面尽快变成可访问链接。</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="欢迎预约课程辅导、咨询网站制作或讨论合作">
        <div className="grid gap-5 md:grid-cols-2">
          <a href={`mailto:${CONTACT_EMAIL}`} className="panel group">
            <Mail className="mb-5 h-7 w-7 text-accent-cyan" />
            <p className="text-sm text-slate-400">邮箱</p>
            <p className="mt-2 text-xl font-semibold text-white transition group-hover:text-accent-cyan">{CONTACT_EMAIL}</p>
          </a>
          <div className="panel">
            <MessageCircle className="mb-5 h-7 w-7 text-accent-green" />
            <p className="text-sm text-slate-400">微信</p>
            <p className="mt-2 text-xl font-semibold text-white">{CONTACT_WECHAT}</p>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        <p>© 2026 张昊森. Built with React, TypeScript and Tailwind CSS.</p>
      </footer>
    </main>
  );
}

export default App;
