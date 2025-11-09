import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const services = [
    {
      icon: "Megaphone",
      title: "Digital-продвижение",
      description: "Настройка таргета, контекста, SEO для максимального охвата"
    },
    {
      icon: "Palette",
      title: "Создание дизайна",
      description: "Фирменный стиль, айдентика, креативы для соцсетей"
    },
    {
      icon: "Code",
      title: "Разработка сайтов",
      description: "Лендинги, корпоративные сайты, интернет-магазины"
    },
    {
      icon: "Database",
      title: "Внедрение CRM и телефонии",
      description: "Автоматизация бизнес-процессов и аналитика"
    },
    {
      icon: "Target",
      title: "PR-стратегии",
      description: "Управление репутацией, работа со СМИ"
    },
    {
      icon: "TrendingUp",
      title: "Стратегический план",
      description: "Комплексная маркетинговая стратегия роста"
    }
  ];

  const portfolio = [
    {
      title: "Стоматологическая клиника Premium Smile",
      result: "+340% записей за 3 месяца",
      tags: ["Таргет", "CRM", "Дизайн"]
    },
    {
      title: "Сеть бьюти-студий BeautyLab",
      result: "ROI 580% за квартал",
      tags: ["SEO", "Контент", "Сайт"]
    },
    {
      title: "Клиника эстетической медицины",
      result: "Узнаваемость бренда +250%",
      tags: ["PR", "SMM", "Стратегия"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            АГЕНТСТВО
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-3xl animate-gradient bg-[length:200%_200%]"></div>
            <div className="relative z-10 text-center animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-heading font-black mb-6 leading-tight">
                Полный цикл
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  рекламы
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Увеличиваем прибыль клиник и бьюти-бизнеса через маркетинг полного цикла
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 hover:scale-105 transition-transform">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                  Смотреть кейсы
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-4 animate-fade-in">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Комплексный подход к развитию вашего бизнеса
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group border-2 hover:border-primary animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Icon name={service.icon} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-heading font-bold mb-8 animate-fade-in">
            О нас
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Мы — молодое маркетинговое агентство полного цикла, которое специализируется на продвижении 
              <span className="font-bold text-primary"> стоматологических клиник</span> и 
              <span className="font-bold text-secondary"> бьюти-бизнеса</span>.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Наша команда объединяет digital-специалистов, дизайнеров, разработчиков и стратегов, 
              которые знают индустрию изнутри и понимают, как привлечь целевую аудиторию.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-5xl font-heading font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-sm uppercase tracking-wider">Успешных проектов</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-5xl font-heading font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                  3x
                </div>
                <div className="text-sm uppercase tracking-wider">Средний рост прибыли</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-5xl font-heading font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-sm uppercase tracking-wider">Вовлеченность в процесс</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-4 animate-fade-in">
            Портфолио
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Реальные результаты наших клиентов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary via-secondary to-accent rounded-xl mb-6 flex items-center justify-center">
                  <Icon name="Sparkles" size={48} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {project.title}
                </h3>
                <div className="text-3xl font-heading font-black text-primary mb-4">
                  {project.result}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-heading font-bold mb-4 animate-fade-in">
              Начнём работу?
            </h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>
          <Card className="p-8 animate-scale-in">
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  className="min-h-12 text-lg"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Расскажите о вашем проекте"
                  className="min-h-32 text-lg"
                />
              </div>
              <Button
                className="w-full h-14 text-lg bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity"
              >
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            АГЕНТСТВО
          </div>
          <div className="flex justify-center gap-8 mb-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Маркетинговое агентство полного цикла
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
