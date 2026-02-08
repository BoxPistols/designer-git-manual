import { CheckCircle2, Circle } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  completed: boolean;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: string;
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  const currentIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <div className="space-y-3">
      {steps.map((step, index) => {
        const isCompleted = step.completed;
        const isCurrent = step.id === currentStep;
        const isUpcoming = index > currentIndex;

        return (
          <div key={step.id} className="flex items-center gap-3">
            {/* Step Circle */}
            <div className="relative flex-shrink-0">
              {isCompleted ? (
                <CheckCircle2 className="w-8 h-8 text-secondary" />
              ) : isCurrent ? (
                <div className="w-8 h-8 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>
              ) : (
                <Circle className={`w-8 h-8 ${isUpcoming ? 'text-muted' : 'text-muted'}`} />
              )}
            </div>

            {/* Step Title */}
            <span
              className={`text-sm font-medium transition-colors ${
                isCompleted
                  ? 'text-secondary'
                  : isCurrent
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
              }`}
            >
              {step.title}
            </span>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`absolute left-4 top-8 w-0.5 h-6 transition-colors ${
                  isCompleted ? 'bg-secondary' : 'bg-muted'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
