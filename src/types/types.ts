export interface userType {
  id: string;
  username: string;
  email: string;
  questions: questionType[];
  answers: answerType[];
  reputation: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface questionType {
  id: string;
  user: userType;
  userId: string;
  title: string;
  bodyText: string;
  comments: commentType[];
  upvote: (string | undefined)[];
  downvote: (string | undefined)[];
  acceptedAnswer: string;
  views: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface answerType {
  id: string;
}

export interface commentType {
  id: string;
  post: questionType;
  user: userType;
  commentText: string;
  createdAt: string;
  updatedAt: string;
}
