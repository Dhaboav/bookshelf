import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import type { Book } from '@/types/book';
import { Edit, Trash2 } from 'lucide-react';

interface BookDetailProps {
    book: Book;
    onEdit: () => void;
    onDelete: () => void;
}

function BookDetail({ book, onEdit, onDelete }: BookDetailProps) {
    return (
        <div className="grid gap-8 md:grid-cols-3">
            {/* Book Cover */}
            <div className="md:col-span-1">
                <Card className="h-full overflow-hidden">
                    <div className="h-full bg-linear-(--gradient-primary)">
                        {book.cover ? (
                            <img
                                src={book.cover}
                                alt={book.title}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center">
                                <span className="text-primary-foreground/50 text-8xl">📚</span>
                            </div>
                        )}
                    </div>
                </Card>
            </div>

            {/* Book Details */}
            <div className="md:col-span-2">
                <div className="mb-4">
                    <h1 className="mb-2 text-4xl font-bold">{book.title}</h1>
                    <p className="text-muted-foreground mb-4 text-xl">by {book.author}</p>

                    <div className="mb-6 flex items-center gap-4">
                        <Badge textSize="sm">{book.genre}</Badge>

                        <span className="text-muted-foreground text-sm">
                            Published: {book.year}
                        </span>
                    </div>
                </div>

                <Card className="mb-6">
                    <CardContent className="max-h-36 min-h-36 overflow-y-auto pt-6">
                        <h2 className="mb-3 text-lg font-semibold">Description</h2>
                        <p className="text-secondary overflow-hidden leading-relaxed wrap-break-word whitespace-pre-line">
                            {book.description || 'No description available.'}
                        </p>
                    </CardContent>
                </Card>

                <div className="flex gap-3">
                    <Button onClick={onEdit} className="flex-1">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Book
                    </Button>

                    <Button variant="delete" onClick={onDelete} className="flex-1">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Book
                    </Button>
                </div>
            </div>
        </div>
    );
}

export { BookDetail };
