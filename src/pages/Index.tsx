import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Icon
              name="Heart"
              size={48}
              className="mx-auto mb-4 text-rose-400"
            />
          </div>
          <h1 className="text-6xl font-bold mb-4 text-gray-800 font-cormorant">
            Елена & Максим
          </h1>
          <p className="text-2xl text-gray-600 mb-8 font-montserrat">
            Приглашаем вас разделить с нами радость нашего особенного дня
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Icon name="Calendar" size={24} className="text-rose-400" />
            <span className="text-xl font-semibold text-gray-700">
              19 июля 2025
            </span>
          </div>
          <Button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full text-lg">
            Подтвердить участие
          </Button>
        </div>

        {/* Decorative rings */}
        <div className="absolute top-10 left-10 opacity-20">
          <Icon name="Sparkles" size={32} className="text-rose-300" />
        </div>
        <div className="absolute top-20 right-20 opacity-20">
          <Icon name="Sparkles" size={28} className="text-rose-300" />
        </div>
      </section>

      {/* Program Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-cormorant">
            Программа дня
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Church"
                  size={48}
                  className="mx-auto mb-4 text-rose-400"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Церемония
                </h3>
                <p className="text-gray-600 mb-2">14:00 - 15:00</p>
                <p className="text-sm text-gray-500">
                  Официальная регистрация брака
                </p>
              </CardContent>
            </Card>

            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Camera"
                  size={48}
                  className="mx-auto mb-4 text-rose-400"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Фотосессия
                </h3>
                <p className="text-gray-600 mb-2">15:00 - 16:30</p>
                <p className="text-sm text-gray-500">
                  Свадебная фотосессия в парке
                </p>
              </CardContent>
            </Card>

            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Music"
                  size={48}
                  className="mx-auto mb-4 text-rose-400"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Банкет
                </h3>
                <p className="text-gray-600 mb-2">17:00 - 23:00</p>
                <p className="text-sm text-gray-500">
                  Праздничный ужин и танцы
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wedding Details Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-cormorant">
            Детали свадьбы
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={32} className="text-rose-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Место проведения
                  </h3>
                  <p className="text-gray-600">Загородный клуб "Романтика"</p>
                  <p className="text-gray-500 text-sm">
                    Московская область, Красногорск
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Clock" size={32} className="text-rose-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Время
                  </h3>
                  <p className="text-gray-600">19 июля 2025</p>
                  <p className="text-gray-500 text-sm">Начало в 14:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Shirt" size={32} className="text-rose-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Дресс-код
                  </h3>
                  <p className="text-gray-600">Коктейльный стиль</p>
                  <p className="text-gray-500 text-sm">
                    Пастельные тона приветствуются
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                Подтверждение участия
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-center">
                  Пожалуйста, подтвердите ваше участие до 1 июля 2025
                </p>
                <div className="flex flex-col gap-3">
                  <Button className="bg-rose-400 hover:bg-rose-500 text-white">
                    Буду на свадьбе!
                  </Button>
                  <Button
                    variant="outline"
                    className="border-rose-300 text-rose-600 hover:bg-rose-50"
                  >
                    К сожалению, не смогу
                  </Button>
                </div>
                <div className="pt-4 border-t border-rose-200">
                  <p className="text-sm text-gray-500 text-center">
                    По вопросам обращайтесь:
                  </p>
                  <p className="text-center text-gray-600">
                    +7 (999) 123-45-67
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <Icon name="Heart" size={32} className="mx-auto mb-4 text-rose-400" />
          <p className="text-gray-600 text-lg">С любовью, Елена и Максим</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
