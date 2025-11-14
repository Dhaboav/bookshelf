import BookItem from '@/components/layout/BookItem';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import type { Book } from '@/types/book';
import {
    BookOpen,
    CalendarDays,
    LayoutGrid,
    Library,
    List,
    Plus,
    Search,
    UsersRound,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

// Sample data
const sampleBooks: Book[] = [
    {
        id: '1',
        title: 'The Midnight Library',
        author: 'Matt Haig',
        genre: 'Fiction',
        year: 2020,
        description: 'A dazzling novel about all the choices that go into a life well lived.',
        rating: 4.5,
    },
    {
        id: '2',
        title: 'Atomic Habits',
        author: 'James Clear',
        genre: 'Self-Help',
        year: 2018,
        description: 'An easy and proven way to build good habits and break bad ones.',
        rating: 4.8,
    },
    {
        id: '3',
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        genre: 'Science Fiction',
        year: 2021,
        description:
            'A lone astronaut must save the earth from disaster in this amazing new sci-fi thriller.',
        rating: 4.7,
    },
    {
        id: '4',
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        genre: 'Finance',
        year: 2020,
        description: 'Timeless lessons on wealth, greed, and happiness.',
        rating: 4.6,
    },
];

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [books] = useState<Book[]>(sampleBooks);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.genre.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    // Calculate statistics
    const totalBooks = books.length;
    const genreData = books.reduce(
        (acc, book) => {
            const existing = acc.find((item) => item.genre === book.genre);
            if (existing) {
                existing.count += 1;
            } else {
                acc.push({ genre: book.genre, count: 1 });
            }
            return acc;
        },
        [] as { genre: string; count: number }[],
    );

    const yearData = books
        .reduce(
            (acc, book) => {
                const yearStr = book.year.toString();
                const existing = acc.find((item) => item.year === yearStr);
                if (existing) {
                    existing.count += 1;
                } else {
                    acc.push({ year: yearStr, count: 1 });
                }
                return acc;
            },
            [] as { year: string; count: number }[],
        )
        .sort((a, b) => parseInt(a.year) - parseInt(b.year));

    const avgRating = (
        books.reduce((sum, book) => sum + (book.rating || 0), 0) / books.length
    ).toFixed(1);

    const COLORS = [
        'hsl(var(--primary))',
        'hsl(var(--accent))',
        'hsl(var(--secondary))',
        'hsl(var(--muted))',
    ];

    return (
        <div className="mx-auto">
            <div className="container mx-auto pt-24 pb-12">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="mb-2 text-4xl font-bold">My Library</h1>
                    <p className="text-muted-foreground">Manage and explore your book collection</p>
                </div>

                {/* Statistics Cards */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Books</CardTitle>
                            <BookOpen className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{totalBooks}</div>
                            <p className="text-muted-foreground text-xs">In your collection</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Genres</CardTitle>
                            <Library className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{genreData.length}</div>
                            <p className="text-muted-foreground text-xs">Different genres</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Authors</CardTitle>
                            <UsersRound className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{avgRating}</div>
                            <p className="text-muted-foreground text-xs">Unique authors</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Latest Year</CardTitle>
                            <CalendarDays className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {Math.max(...books.map((b) => b.year))}
                            </div>
                            <p className="text-muted-foreground text-xs">Most recent book</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts */}
                <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Books by Genre</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={genreData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={(entry) => entry.genre}
                                        outerRadius={80}
                                        fill="hsl(var(--primary))"
                                        dataKey="count"
                                    >
                                        {genreData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Books by Year</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={yearData}>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="hsl(var(--border))"
                                    />
                                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                                    <YAxis stroke="hsl(var(--muted-foreground))" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'hsl(var(--card))',
                                            border: '1px solid hsl(var(--border))',
                                            borderRadius: 'var(--radius)',
                                        }}
                                    />
                                    <Bar dataKey="count" fill="hsl(var(--primary))" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Search, View Toggle and Add */}
                <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
                    <div className="relative w-full flex-1">
                        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                        <Input
                            placeholder="Search books by title, author, or genre..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant={viewMode === 'grid' ? 'default' : 'outline'}
                            size="icon"
                            onClick={() => setViewMode('grid')}
                            aria-label="Grid view"
                        >
                            <LayoutGrid className="h-4 w-4" />
                        </Button>
                        <Button
                            variant={viewMode === 'list' ? 'default' : 'outline'}
                            size="icon"
                            onClick={() => setViewMode('list')}
                            aria-label="List view"
                        >
                            <List className="h-4 w-4" />
                        </Button>
                    </div>
                    <Button asChild className="sm:w-auto">
                        <Link to="/books/add">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Book
                        </Link>
                    </Button>
                </div>

                {/* Books Item */}
                {filteredBooks.length > 0 ? (
                    viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredBooks.map((book) => (
                                <BookItem key={book.id} {...book} />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {filteredBooks.map((book) => (
                                <BookItem key={book.id} variant="list" {...book} />
                            ))}
                        </div>
                    )
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-muted-foreground mb-4 text-lg">
                            No books found matching your search
                        </p>
                        <Button asChild variant="outline">
                            <Link to="/books/add">Add Your First Book</Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
