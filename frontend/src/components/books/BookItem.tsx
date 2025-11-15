import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import type { Book } from '@/types/book';
import { Link } from 'react-router-dom';

const styles = {
    card: 'group overflow-hidden hover:-translate-y-1 hover:shadow-lg',
    list: 'group flex items-center gap-5 p-4 hover:shadow-md',

    coverCard: 'overflow-hidden bg-linear-(--gradient-primary) aspect-3/4 w-full',
    coverList: 'overflow-hidden bg-linear-(--gradient-primary) h-20 w-16 shrink-0 rounded',

    contentCard: 'pt-4',
    contentList: 'min-w-0 flex-1 p-0',

    titleCard: 'font-semibold line-clamp-2 text-lg group-hover:text-primary transition-colors',
    titleList: 'font-semibold truncate text-lg group-hover:text-primary transition-colors',
};

interface BookItemProps extends Book {
    variant?: 'card' | 'list';
}

function BookItem({ variant = 'card', ...book }: BookItemProps) {
    const isCard = variant === 'card';
    const isList = variant === 'list';

    return (
        <Link to={`/book/${book.id}`} className="block">
            <Card className={isCard ? styles.card : styles.list}>
                <div className={isCard ? styles.coverCard : styles.coverList}>
                    {book.cover ? (
                        <img
                            src={book.cover}
                            alt={book.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-white">
                            <span className={isCard ? 'text-6xl' : 'text-2xl'}>📚</span>
                        </div>
                    )}
                </div>

                <CardContent className={isCard ? styles.contentCard : styles.contentList}>
                    <h3 className={isCard ? styles.titleCard : styles.titleList}>{book.title}</h3>

                    <p className="mb-2 text-sm text-gray-500">{book.author}</p>

                    <div className="flex items-center gap-2">
                        <Badge>{book.genre}</Badge>
                        {isList && <span className="text-xs text-gray-500">{book.year}</span>}
                    </div>
                </CardContent>

                {isCard && (
                    <CardFooter className="pt-0 text-xs text-gray-500">
                        Published: {book.year}
                    </CardFooter>
                )}
            </Card>
        </Link>
    );
}

export { BookItem };
