import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Book } from '@/types/book';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookListItem = (book: Book) => {
    return (
        <Link to={`/book/${book.id}`}>
            <Card className="group p-4 transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-4">
                    <div className="h-20 w-16 shrink-0 overflow-hidden rounded bg-linear-(--gradient-primary)">
                        {book.cover ? (
                            <img
                                src={book.cover}
                                alt={book.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center">
                                <span className="text-2xl text-white">📚</span>
                            </div>
                        )}
                    </div>

                    <div className="min-w-0 flex-1">
                        <h3 className="group-hover:text-primary mb-1 truncate text-lg font-semibold transition-colors">
                            {book.title}
                        </h3>
                        <p className="text-muted-foreground mb-2 text-sm">{book.author}</p>
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge>{book.genre}</Badge>
                            <span className="text-muted-foreground text-xs">{book.year}</span>
                            {book.rating && (
                                <div className="flex items-center gap-1">
                                    <Star className="fill-primary text-primary h-3 w-3" />
                                    <span className="text-xs font-medium">{book.rating}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default BookListItem;
