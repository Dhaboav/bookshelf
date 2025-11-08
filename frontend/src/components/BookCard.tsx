import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { Book } from '@/types/book';
import { Link } from 'react-router-dom';

interface BookCardProps {
    book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
    return (
        <Link to={`/book/${book.id}`}>
            <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[3/4] overflow-hidden bg-linear-(--gradient-primary)">
                    {book.cover ? (
                        <img
                            src={book.cover}
                            alt={book.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center">
                            <span className="text-primary-foreground/50 text-6xl">📚</span>
                        </div>
                    )}
                </div>
                <CardContent className="pt-4">
                    <h3 className="group-hover:text-primary mb-1 line-clamp-2 text-lg font-semibold transition-colors">
                        {book.title}
                    </h3>
                    <p className="text-muted-foreground mb-2 text-sm">{book.author}</p>
                    <Badge variant="secondary" className="text-xs">
                        {book.genre}
                    </Badge>
                </CardContent>
                <CardFooter className="text-muted-foreground pt-0 text-xs">
                    Published: {book.year}
                </CardFooter>
            </Card>
        </Link>
    );
};

export default BookCard;
