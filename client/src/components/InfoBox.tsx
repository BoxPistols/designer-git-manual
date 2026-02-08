import { AlertCircle, Info, CheckCircle2, AlertTriangle } from 'lucide-react';
import { ReactNode } from 'react';

type InfoBoxType = 'info' | 'warning' | 'success' | 'error';

interface InfoBoxProps {
  type?: InfoBoxType;
  title?: string;
  children: ReactNode;
}

const styles: Record<InfoBoxType, { bg: string; border: string; icon: ReactNode; title: string }> = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: <Info className="text-blue-600" size={20} />,
    title: '情報',
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: <AlertTriangle className="text-amber-600" size={20} />,
    title: '注意',
  },
  success: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: <CheckCircle2 className="text-green-600" size={20} />,
    title: '成功',
  },
  error: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: <AlertCircle className="text-red-600" size={20} />,
    title: 'エラー',
  },
};

export default function InfoBox({ type = 'info', title, children }: InfoBoxProps) {
  const style = styles[type];

  return (
    <div className={`rounded-lg border-l-4 ${style.bg} ${style.border} p-4`}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 pt-0.5">{style.icon}</div>
        <div className="flex-1">
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
