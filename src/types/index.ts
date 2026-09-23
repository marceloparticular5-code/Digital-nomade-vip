export interface Lesson {
  id: string;
  moduleId: number;
  day: number;
  title: string;
  duration: string;
  summary: string;
  description: string;
  keyTakeaways: string[];
  actionItem: string;
  deliverable?: string;
  videoPlaceholderUrl?: string;
  completed?: boolean;
}

export interface CourseModule {
  id: number;
  title: string;
  subtitle: string;
  objective: string;
  unlockCondition: string;
  unlockedByDefault: boolean;
  deliverable: string;
  practicalTool: string;
  lessons: Lesson[];
}

export interface UserStudent {
  name: string;
  email: string;
  isLoggedIn: boolean;
  authProvider: 'google' | 'email' | 'guest';
  completedLessonIds: string[];
  unlockedModuleIds: number[];
  enrolledAt: string;
  currency: 'BRL' | 'USD' | 'EUR';
  notes: Record<string, string>; // lessonId -> note
  deliverableAnswers: {
    startMap?: {
      skill: string;
      targetAudience: string;
      problemSolved: string;
      monthlyIncomeGoal: string;
      weeklyHours: string;
      firstOffer: string;
    };
    opportunityMatrix?: {
      choice1: string;
      choice2: string;
      choice3: string;
      selectedPath: string;
      idealClient: string;
    };
    offerBlueprint?: {
      offerName: string;
      price: string;
      deliveryTimeline: string;
      includedItems: string;
      prospectingScript: string;
    };
  };
}

export interface CommunityPost {
  id: string;
  author: string;
  authorCity: string;
  authorCountry: string;
  authorRole: string;
  avatarUrl?: string;
  content: string;
  likes: number;
  repliesCount: number;
  timestamp: string;
  tag: string;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'unlock' | 'community' | 'support' | 'reminder';
  read: boolean;
}
