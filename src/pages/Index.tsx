import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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

  const floatingStars = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className={`absolute animate-pulse ${
        i % 2 === 0 ? 'animate-bounce' : ''
      }`}
      style={{
        top: `${20 + (i * 15)}%`,
        left: `${10 + (i * 15)}%`,
        animationDelay: `${i * 0.5}s`,
        animationDuration: `${2 + i * 0.3}s`
      }}
    >
      <Icon name="Star" size={16} className="text-purple-300 opacity-60" />
    </div>
  ));

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Floating magical elements */}
      {floatingStars}
      
      <div className="text-center max-w-2xl mx-auto px-6">
        {/* Main Title */}
        <div className="mb-12 relative">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-4 tracking-tight">
            САЙТ УДАЧИ
          </h1>
          <div className="flex justify-center items-center gap-2 text-purple-500">
            <Icon name="Sparkles" size={24} className="animate-pulse" />
            <Icon name="Heart" size={20} className="animate-bounce" />
            <Icon name="Star" size={22} className="animate-pulse" />
          </div>
        </div>

        {/* Wish Input Section */}
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-gray-600 font-normal">
              Напишите ваше желание
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Введите ваше желание..."
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
          </CardContent>
        </Card>

        {/* Wishes List */}
        {wishes.length > 0 && (
          <div className="mt-8 space-y-3">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Ваши желания:</h3>
            {wishes.map((w, index) => (
              <div key={index} className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg">
                <Icon name="Star" size={16} className="text-purple-500" />
                <span className="text-gray-800">{w}</span>
              </div>
            ))}
          </div>
        )}

        {/* Payment Dialog */}
        <Dialog open={showPayment} onOpenChange={setShowPayment}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl">
                Оплата за исполнение желания
              </DialogTitle>
            </DialogHeader>
            <div className="text-center space-y-6 py-4">
              <div className="text-6xl">✨</div>
              <p className="text-gray-600">
                Ваше желание добавлено в магическую систему!
              </p>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">99 ₽</div>
                <p className="text-sm text-gray-500">За исполнение желания</p>
              </div>
              <div className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Оплатить картой
                </Button>
                <Button variant="outline" className="w-full">
                  Оплатить через СБП
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                Гарантия исполнения желания в течение 30 дней
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Index;