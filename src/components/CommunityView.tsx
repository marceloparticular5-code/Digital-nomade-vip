import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Send, MapPin, Tag, Users, Sparkles } from 'lucide-react';
import { CommunityPost, UserStudent } from '../types';

interface CommunityViewProps {
  student: UserStudent;
  onOpenAuth: () => void;
}

const INITIAL_POSTS: CommunityPost[] = [
  {
    id: "p1",
    author: "Camila Viana",
    authorCity: "Lisboa",
    authorCountry: "Portugal 🇵🇹",
    authorRole: "Gestora de Tráfego & Nômade",
    content: "Cheguei há 2 semanas em Lisboa com o Visto D8! Para quem está procurando coworking com internet rápida e comunidade ativa, recomendo o Second Home e o LACS no Cais do Sodré. Fechei meu 3º cliente internacional ontem usando o roteiro de prospecção do Módulo 3!",
    likes: 24,
    repliesCount: 7,
    timestamp: "Há 2 horas",
    tag: "Networking & Coworking"
  },
  {
    id: "p2",
    author: "Rodrigo Mendes",
    authorCity: "Medellín",
    authorCountry: "Colômbia 🇨🇴",
    authorRole: "Desenvolvedor de Sites & Automações",
    content: "Dica de ouro sobre eSIM na América do Sul: o plano da Claro ou o eSIM da Maya funcionam perfeitamente em El Poblado. Custo de vida aqui tá saindo menos de R$ 5.000/mês vivendo super bem!",
    likes: 19,
    repliesCount: 4,
    timestamp: "Há 5 horas",
    tag: "Custos & Conectividade"
  },
  {
    id: "p3",
    author: "Beatriz Lins",
    authorCity: "Florianópolis",
    authorCountry: "Brasil 🇧🇷",
    authorRole: "Copywriter & Estrategista",
    content: "Alguém do Módulo 1 querendo fazer uma parceria? Eu cuido de textos e roteiros de e-mail e procuro alguém de design/sites para criarmos uma oferta conjunta para pousadas e turismo!",
    likes: 31,
    repliesCount: 12,
    timestamp: "Há 1 dia",
    tag: "Oportunidades & Parcerias"
  },
  {
    id: "p4",
    author: "Lucas Ferreira",
    authorCity: "Chiang Mai",
    authorCountry: "Tailândia 🇹🇭",
    authorRole: "Criador de Conteúdo & Afiliados",
    content: "Chiang Mai continua sendo o paraíso dos nômades. Aluguel de condo com piscina por US$ 350 e cafés com Wi-Fi de 400 Mbps por toda a Nimman Road. Visto DTV aprovado em menos de 10 dias!",
    likes: 45,
    repliesCount: 15,
    timestamp: "Há 2 dias",
    tag: "Vistos & Ásia"
  }
];

export const CommunityView: React.FC<CommunityViewProps> = ({ student, onOpenAuth }) => {
  const [posts, setPosts] = useState<CommunityPost[]>(INITIAL_POSTS);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [newPostContent, setNewPostContent] = useState<string>('');
  const [authorCity, setAuthorCity] = useState<string>('Lisboa');

  const tags = [
    { id: 'all', label: 'Todos os Tópicos' },
    { id: 'Networking & Coworking', label: 'Coworkings' },
    { id: 'Oportunidades & Parcerias', label: 'Parcerias' },
    { id: 'Custos & Conectividade', label: 'Conectividade' },
    { id: 'Vistos & Ásia', label: 'Vistos' }
  ];

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!student.isLoggedIn) {
      onOpenAuth();
      return;
    }
    if (!newPostContent.trim()) return;

    const newPost: CommunityPost = {
      id: `p-${Date.now()}`,
      author: student.name,
      authorCity: authorCity,
      authorCountry: "Nômade Digital 🌍",
      authorRole: "Aluno VIP",
      content: newPostContent.trim(),
      likes: 1,
      repliesCount: 0,
      timestamp: "Agora mesmo",
      tag: selectedTag === 'all' ? 'Networking & Coworking' : selectedTag
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const handleLike = (id: string) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const filteredPosts = selectedTag === 'all'
    ? posts
    : posts.filter(p => p.tag === selectedTag);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
      
      {/* Community Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
          Networking Exclusivo para Alunos e Nômades
        </span>
        <h2 className="font-['Syne'] text-3xl font-extrabold text-white mt-1">
          Comunidade Global de Nômades
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Conecte-se com participantes em dezenas de países. Compartilhe parcerias, indicações de clientes e dicas de campo.
        </p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
        {tags.map(t => (
          <button
            key={t.id}
            onClick={() => setSelectedTag(t.id)}
            className={`rounded-xl border px-3.5 py-1.5 font-medium transition-all ${
              selectedTag === t.id
                ? 'border-cyan-400 bg-cyan-950 text-cyan-300 shadow'
                : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Post Box */}
      <form onSubmit={handleCreatePost} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            Iniciar uma conversa com a comunidade
          </span>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <MapPin className="h-3.5 w-3.5 text-cyan-400" />
            <span>Sua cidade atual:</span>
            <input
              type="text"
              value={authorCity}
              onChange={e => setAuthorCity(e.target.value)}
              placeholder="Ex: Lisboa, Bali, Floripa"
              className="rounded border border-slate-700 bg-slate-950 px-2 py-0.5 text-xs text-white focus:outline-none"
            />
          </div>
        </div>

        <textarea
          rows={3}
          value={newPostContent}
          onChange={e => setNewPostContent(e.target.value)}
          placeholder={student.isLoggedIn ? "Compartilhe uma dúvida, dica de coworking ou busque parceiros para projetos..." : "Faça login para postar no fórum..."}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-bold text-black hover:opacity-90"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Publicar Tópico</span>
          </button>
        </div>
      </form>

      {/* Feed */}
      <div className="space-y-4">
        {filteredPosts.map(post => (
          <div
            key={post.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3 transition-colors hover:border-slate-700"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-500/40 text-cyan-300 font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{post.author}</h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <MapPin className="h-3 w-3" /> {post.authorCity}, {post.authorCountry}
                    </span>
                    <span>·</span>
                    <span>{post.authorRole}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300 font-mono">
                  {post.tag}
                </span>
                <span className="text-[11px] text-slate-500">{post.timestamp}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {post.content}
            </p>

            <div className="flex items-center gap-4 border-t border-slate-800/80 pt-3 text-xs text-slate-400">
              <button
                type="button"
                onClick={() => handleLike(post.id)}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <ThumbsUp className="h-3.5 w-3.5" />
                <span>{post.likes} Útil</span>
              </button>

              <button
                type="button"
                onClick={() => alert("Janela de respostas aberta para interação!")}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>{post.repliesCount} Respostas</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
