import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Rules = () => {
  const floatingStars = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="absolute animate-pulse"
      style={{
        top: `${15 + (i * 15)}%`,
        left: `${8 + (i * 14)}%`,
        animationDelay: `${i * 0.8}s`,
        animationDuration: `${3 + i * 0.2}s`
      }}
    >
      <Icon name="Star" size={12} className="text-purple-200 opacity-50" />
    </div>
  ));

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating magical elements */}
      {floatingStars}
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            ПРАВИЛА ИСПОЛЬЗОВАНИЯ
          </h1>
          <div className="flex justify-center items-center gap-2 text-purple-500">
            <Icon name="ScrollText" size={24} className="animate-pulse" />
            <Icon name="Shield" size={20} className="animate-bounce" />
            <Icon name="CheckCircle" size={22} className="animate-pulse" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Navigation */}
          <div className="text-center">
            <Link to="/">
              <Button variant="outline" className="mb-8">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад к сайту удачи
              </Button>
            </Link>
          </div>

          {/* Main Rules */}
          <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                <Icon name="Star" size={28} className="text-purple-600" />
                Основные правила
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <Icon name="Check" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Сроки исполнения желаний</h3>
                  <p>Все желания исполняются в течение 30 календарных дней с момента оплаты. Мы используем магическую систему, которая работает круглосуточно для воплощения ваших мечт в реальность.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="CreditCard" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Процесс оплаты</h3>
                  <p>Оплата происходит только после того, как вы напишете свое желание и нажмете "ОК". Никаких скрытых платежей или предварительных взносов. Вы платите только за то, что заказываете.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Lock" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Конфиденциальность</h3>
                  <p>Все ваши желания обрабатываются строго конфиденциально. Мы никому не передаем информацию о ваших запросах и используем современные методы шифрования данных.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Shield" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Гарантия возврата</h3>
                  <p>Если ваше желание не исполнится в течение 30 дней, мы гарантируем полный возврат средств на вашу карту или счет в течение 7 рабочих дней.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Terms */}
          <Card className="shadow-xl border-0 bg-white/95">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center gap-3">
                <Icon name="AlertCircle" size={24} className="text-amber-600" />
                Дополнительные условия
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <Icon name="Dot" size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                <p>Желания должны быть сформулированы четко и конкретно для лучшего результата</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Dot" size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                <p>Мы не исполняем желания, которые могут причинить вред другим людям</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Dot" size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                <p>Стоимость исполнения любого желания составляет 99 рублей</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Dot" size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                <p>Вы можете отслеживать статус исполнения желания в личном кабинете</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="shadow-xl border-0 bg-gradient-to-r from-purple-100 to-pink-100">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center gap-3">
                <Icon name="MessageCircle" size={24} className="text-purple-600" />
                Поддержка пользователей
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="mb-4">
                Если у вас есть вопросы или нужна помощь, наша служба поддержки работает круглосуточно:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={16} className="text-purple-600" />
                  <span>support@сайтудачи.рф</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={16} className="text-purple-600" />
                  <span>8-800-555-удача (бесплатно по России)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MessageSquare" size={16} className="text-purple-600" />
                  <span>Онлайн-чат на сайте (24/7)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back to main */}
          <div className="text-center pt-8">
            <Link to="/">
              <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Вернуться к загадыванию желаний
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;