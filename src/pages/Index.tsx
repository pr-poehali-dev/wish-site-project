import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [wish, setWish] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [wishes, setWishes] = useState<string[]>([]);

  const handleAddWish = () => {
    if (wish.trim()) {
      setWishes([...wishes, wish]);
      setWish('');
      setShowPayment(true);
    }
  };

  const floatingStars = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className={`absolute animate-pulse ${
        i % 2 === 0 ? 'animate-bounce' : ''
      }`}
      style={{
        top: `${10 + (i * 12)}%`,
        left: `${5 + (i * 12)}%`,
        animationDelay: `${i * 0.7}s`,
        animationDuration: `${2 + i * 0.3}s`
      }}
    >
      <Icon name="Star" size={14} className="text-purple-300 opacity-40" />
    </div>
  ));

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating magical elements */}
      {floatingStars}
      
      <div className="container mx-auto px-4 py-8">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            САЙТ УДАЧИ
          </h1>
          <div className="flex justify-center items-center gap-2 text-purple-500">
            <Icon name="Sparkles" size={24} className="animate-pulse" />
            <Icon name="Heart" size={20} className="animate-bounce" />
            <Icon name="Star" size={22} className="animate-pulse" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Wish Form */}
          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-700">
                Форма для написания желаний
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="введите ваш текст"
                  value={wish}
                  onChange={(e) => setWish(e.target.value)}
                  className="text-lg py-4 px-6 border-2 border-purple-200 focus:border-purple-500 rounded-xl"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddWish()}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Icon name="Wand2" size={20} className="text-purple-400" />
                </div>
              </div>
              
              <Button
                onClick={handleAddWish}
                className="w-full text-lg py-4 bg-purple-600 hover:bg-purple-700 rounded-xl transition-all duration-300 hover:scale-105"
                disabled={!wish.trim()}
              >
                ОК
              </Button>

              {/* Payment Section - appears right after OK button */}
              {showPayment && (
                <div className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl animate-fade-in">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">✨</div>
                    <h3 className="text-lg font-semibold text-gray-800">Страница оплаты</h3>
                    <p className="text-sm text-gray-600">Ваше желание добавлено!</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">99 ₽</div>
                      <p className="text-xs text-gray-500">За исполнение желания</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-sm py-2">
                      <Icon name="CreditCard" size={16} className="mr-2" />
                      Оплатить картой
                    </Button>
                    <Button variant="outline" className="w-full text-sm py-2">
                      <Icon name="Smartphone" size={16} className="mr-2" />
                      Оплатить через СБП
                    </Button>
                  </div>
                  
                  <div className="mt-4 bg-purple-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-xs text-purple-700">
                      <Icon name="Shield" size={14} />
                      <span>Гарантия возврата в течение 30 дней</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Rules Section */}
          <Card className="shadow-xl border-0 bg-purple-50/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-700 flex items-center gap-2">
                <Icon name="ScrollText" size={20} />
                Правила использования
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <p>Желания исполняются в течение 30 дней</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <p>Оплата происходит только после добавления желания</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <p>Все желания обрабатываются конфиденциально</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <p>Возврат средств при неисполнении гарантирован</p>
              </div>
            </CardContent>
          </Card>

          {/* Wishes List */}
          {wishes.length > 0 && (
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-gray-700">Ваши желания</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {wishes.map((w, index) => (
                  <div key={index} className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg">
                    <Icon name="Star" size={16} className="text-purple-500" />
                    <span className="text-gray-800">{w}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;