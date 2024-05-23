//일기 데이터 관리

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface DiaryEntry {//내용, 별점 인터페이스
    content: string;
    rating: number;
}

// DiaryContextProps 인터페이스 정의
interface DiaryContextProps {
    diaryEntries: DiaryEntry[];
    addDiaryEntry: (entry: DiaryEntry) => void;
}

const DiaryContext = createContext<DiaryContextProps | undefined>(undefined);

export const useDiary = () => {
    const context = useContext(DiaryContext);

    if(!context) {//context 없으면
        throw new Error('useDiary는 DiaryProvider 내에서만 사용할 수 있습니다')
    }

    return context;
};

export const DiaryProvider = ({children}: {children: ReactNode}) => {

    const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);

    const addDiaryEntry = (entry: DiaryEntry) => {
        // 기존 diaryEntries에 새로운 entry를 추가
        setDiaryEntries([...diaryEntries, entry]);
    };

    return (
        <DiaryContext.Provider value={{ diaryEntries, addDiaryEntry }}>
            {children}
        </DiaryContext.Provider>
    );
}