"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Users,
  FileText,
  Phone,
  Mail,
  ArrowRight,
  AlertCircle,
  Lock,
  ChevronRight,
  TrendingUp,
  DollarSign,
  Home,
  Car,
  CreditCard,
} from "lucide-react";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    tempoEmpresa: "",
    aceitaComunicacao: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Aqui você integraria com Google Sheets ou WhatsApp
    alert("Obrigado! Em breve entraremos em contato via WhatsApp.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* BLOCO 1 - Header/Herói */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="inline-block bg-white rounded-xl px-4 py-2 shadow-lg">
            <img
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3cabfc99-4fd7-4061-b47f-ec24debbdb85.png"
              alt="Lidere Soluções Financeiras"
              className="h-10 w-auto sm:h-12"
            />
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Crédito do Trabalhador — Descubra Agora Quanto Você Tem Disponível
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 leading-relaxed">
              Use seu tempo de carteira assinada para liberar crédito de forma rápida e segura, com condições melhores que empréstimos tradicionais.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-bold"
              onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Zap className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              Simular meu crédito agora
            </Button>
            <p className="mt-4 text-sm sm:text-base text-blue-100 font-medium">
              ✨ É rápido e sem compromisso!
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 2 - O que é o Crédito do Trabalhador */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
              O que é o Crédito do Trabalhador?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed text-center max-w-3xl mx-auto">
              O Crédito do Trabalhador é uma linha especial destinada a quem tem carteira assinada, permitindo acesso a dinheiro de modo simples e rápido, com taxas menores e análise facilitada. É ideal para quem precisa de crédito seguro, sem burocracia e sem depender de um score alto.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Reformar a casa</h3>
                <p className="text-sm sm:text-base text-gray-700">Realize aquela reforma dos sonhos</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-green-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Comprar um carro</h3>
                <p className="text-sm sm:text-base text-gray-700">Conquiste seu veículo próprio</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-purple-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Pagar dívidas</h3>
                <p className="text-sm sm:text-base text-gray-700">Organize sua vida financeira</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 3 - Como Funciona */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              Como funciona?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl sm:text-2xl">
                    1
                  </div>
                  <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mb-4" />
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Preencha o formulário</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Informe seus dados e tempo de carteira assinada
                  </p>
                </div>
                <ChevronRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 h-8 w-8 text-blue-300" />
              </div>

              <div className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300">
                  <div className="bg-gradient-to-br from-green-500 to-green-700 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl sm:text-2xl">
                    2
                  </div>
                  <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mb-4" />
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Análise rápida</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Nossa equipe analisa em poucos minutos, sem custo!
                  </p>
                </div>
                <ChevronRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 h-8 w-8 text-green-300" />
              </div>

              <div className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl sm:text-2xl">
                    3
                  </div>
                  <DollarSign className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600 mb-4" />
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Valor disponível</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Mostramos o valor — sem compromisso, você decide!
                  </p>
                </div>
                <ChevronRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 h-8 w-8 text-purple-300" />
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300">
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl sm:text-2xl">
                  4
                </div>
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600 mb-4" />
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Receba o crédito</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Crédito liberado com segurança e rapidez
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 4 - Para quem é esse crédito */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              Esse crédito é ideal para você que:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Está com contas acumulando e quer organizar a vida financeira",
                "Tem score baixo ou dificuldades na aprovação em bancos",
                "Deseja comprar um carro ou dar entrada em um imóvel",
                "Quer quitar dívidas e limpar o nome",
                "Precisa de dinheiro rápido para imprevistos",
                "Não quer pagar juros abusivos",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-3 sm:gap-4 hover:scale-105"
                >
                  <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 5 - Benefícios */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              Por que esse crédito é melhor?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 sm:p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 transform">
                <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl mb-3">Taxas menores</h3>
                <p className="text-sm sm:text-base text-green-50">
                  Taxas muito mais baixas que empréstimos comuns
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 sm:p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 transform">
                <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl mb-3">Análise rápida</h3>
                <p className="text-sm sm:text-base text-blue-50">
                  Resposta em minutos, sem burocracia
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CheckCircle className="h-12 w-12 sm:h-14 sm:w-14 text-green-600 mb-4" />
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Aprovação facilitada</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Mesmo com score baixo
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Shield className="h-12 w-12 sm:h-14 sm:w-14 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Processo seguro</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Para quem tem carteira assinada
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Users className="h-12 w-12 sm:h-14 sm:w-14 text-purple-600 mb-4" />
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Atendimento humano</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Direto via WhatsApp
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Clock className="h-12 w-12 sm:h-14 sm:w-14 text-orange-600 mb-4" />
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Sem compromisso</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Descubra seu limite gratuitamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 6 - Dores + Solução */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              Está passando por isso?
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 sm:h-10 sm:w-10 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">
                      🔥 Juros altos consumindo sua renda?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      → <span className="font-semibold text-green-700">Troque dívidas caras por soluções mais leves.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 sm:h-10 sm:w-10 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">
                      🔥 Dificuldade para conseguir crédito em bancos?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      → <span className="font-semibold text-green-700">Aqui a análise é simples, aumentando suas chances.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">
                      🔥 Score baixo te travando?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      → <span className="font-semibold text-green-700">Aqui, isso pesa menos do que nos bancos tradicionais.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">
                      🔥 Precisa de dinheiro rápido?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      → <span className="font-semibold text-green-700">Analisamos e respondemos rapidamente.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 7 - Chamada final para ação */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Descubra agora quanto de crédito você pode liberar
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100">
              Preencha os dados abaixo. Nossa equipe analisará e te responderá rapidamente pelo WhatsApp com o valor disponível para você.
            </p>
            <p className="text-lg sm:text-xl font-bold text-yellow-300 animate-pulse">
              ⚡ Não perca essa oportunidade!
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 8 - Formulário */}
      <section id="formulario" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-blue-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-900">
                Simule seu crédito gratuitamente
              </h2>
              <p className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Preencha o formulário e receba sua proposta em minutos
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="nome" className="text-sm sm:text-base font-semibold text-gray-700">
                    Nome completo *
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    required
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="mt-2 h-11 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="cpf" className="text-sm sm:text-base font-semibold text-gray-700">
                    CPF *
                  </Label>
                  <Input
                    id="cpf"
                    type="text"
                    required
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                    className="mt-2 h-11 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="telefone" className="text-sm sm:text-base font-semibold text-gray-700">
                    Telefone (WhatsApp) *
                  </Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="telefone"
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="pl-10 h-11 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm sm:text-base font-semibold text-gray-700">
                    E-mail *
                  </Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 h-11 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="tempoEmpresa" className="text-sm sm:text-base font-semibold text-gray-700">
                    Há quanto tempo você está registrado na empresa atual? *
                  </Label>
                  <Select
                    value={formData.tempoEmpresa}
                    onValueChange={(value) => setFormData({ ...formData, tempoEmpresa: value })}
                  >
                    <SelectTrigger className="mt-2 h-11 sm:h-12 text-sm sm:text-base">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="menos-3">Menos de 3 meses</SelectItem>
                      <SelectItem value="3-6">3 a 6 meses</SelectItem>
                      <SelectItem value="6-12">6 meses a 1 ano</SelectItem>
                      <SelectItem value="mais-1">Mais de 1 ano</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
                  <Checkbox
                    id="aceitaComunicacao"
                    checked={formData.aceitaComunicacao}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, aceitaComunicacao: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <Label
                    htmlFor="aceitaComunicacao"
                    className="text-xs sm:text-sm text-gray-700 cursor-pointer leading-relaxed"
                  >
                    Aceito receber comunicações sobre ofertas e novidades da Lidere Soluções Financeiras
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold text-base sm:text-lg py-5 sm:py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <ArrowRight className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Quero ver meu valor disponível
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 9 - Aviso de Privacidade */}
      <section className="py-8 sm:py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
              <h3 className="font-bold text-base sm:text-lg text-gray-900">Seus dados estão seguros</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Seus dados são confidenciais e usados somente para análise de crédito. Não compartilhamos com terceiros. Ao preencher o formulário, você concorda com nossa política de privacidade e autoriza o contato via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white rounded-xl px-6 py-3 shadow-lg mb-4 sm:mb-6">
              <img
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3cabfc99-4fd7-4061-b47f-ec24debbdb85.png"
                alt="Lidere Soluções Financeiras"
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="text-sm sm:text-base text-blue-100 mb-4">
              Lidere Soluções Financeiras - Crédito do Trabalhador
            </p>
            <p className="text-xs sm:text-sm text-blue-200">
              © 2024 Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
