import {
    BookOpen,
    CalendarDays,
    LayoutGrid,
    Library,
    List,
    Plus,
    Search,
    Tags,
    Users,
    UsersRound,
} from 'lucide-react';
import { useMemo, useState } from 'react';
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

import { BookItem } from '@/components/books/BookItem';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { sampleBooks } from '@/demos/books';
import type { Book } from '@/types/book';

const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))'];

/* -------------------- TYPES -------------------- */
interface GenreStat {
    genre: string;
    count: number;
    [key: string]: string | number; // <-- FIX
}

interface YearStat {
    year: string;
    count: number;
    [key: string]: string | number;
}

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value?: number;
    subtitle: string;
}

interface ChartCardProps {
    title: string;
    children: React.ReactNode;
}

interface IconToggleProps {
    icon: React.ReactNode;
    active: boolean;
    onClick: () => void;
}

export default function Dashboard() {
    const [search, setSearch] = useState('');
    const [books] = useState<Book[]>(sampleBooks);
    const [view, setView] = useState<'grid' | 'list'>('grid');

    // ============================================================
    // FILTER BOOKS
    // ============================================================
    const filteredBooks = useMemo(() => {
        const q = search.toLowerCase();
        return books.filter(
            (b) =>
                b.title.toLowerCase().includes(q) ||
                b.author.toLowerCase().includes(q) ||
                b.genre.toLowerCase().includes(q),
        );
    }, [search, books]);

    // ============================================================
    // STATISTICS
    // ============================================================
    const totalBooks = books.length;

    // Calculate unique authors
    const uniqueAuthors = new Set(books.map((book) => book.author)).size;

    // Calculate unique genres
    const uniqueGenres = new Set(books.map((book) => book.genre)).size;

    const genreStats: GenreStat[] = useMemo(() => {
        const map: Record<string, number> = {};
        books.forEach((b) => (map[b.genre] = (map[b.genre] || 0) + 1));
        return Object.entries(map).map(([genre, count]) => ({ genre, count }));
    }, [books]);

    const yearStats: YearStat[] = useMemo(() => {
        const map: Record<string, number> = {};
        books.forEach((b) => (map[b.year] = (map[b.year] || 0) + 1));
        return Object.entries(map)
            .map(([year, count]) => ({ year, count }))
            .sort((a, b) => +a.year - +b.year);
    }, [books]);

    const latestYear = Math.max(...books.map((b) => b.year));

    // ============================================================
    // PIE LABEL FIX (NO OVERFLOW)
    // ============================================================

    // ============================================================
    // RENDER
    // ============================================================
    return (
        <div className="container mx-auto pt-24 pb-12">
            {/* HEADER */}
            <div className="mb-8">
                <h1 className="mb-2 text-4xl font-bold">My Library</h1>
                <p className="text-muted-foreground">Manage and explore your book collection</p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Card className="cursor-pointer transition-shadow hover:shadow-lg">
                    <Link to="/authors">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Manage Authors</CardTitle>
                            <Users className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{uniqueAuthors}</div>
                            <p className="text-muted-foreground text-xs">
                                Click to add or edit authors
                            </p>
                        </CardContent>
                    </Link>
                </Card>
                <Card className="cursor-pointer transition-shadow hover:shadow-lg">
                    <Link to="/genres">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Manage Genres</CardTitle>
                            <Tags className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{uniqueGenres}</div>
                            <p className="text-muted-foreground text-xs">
                                Click to add or edit genres
                            </p>
                        </CardContent>
                    </Link>
                </Card>
            </div>

            {/* STAT CARDS */}
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    icon={<BookOpen />}
                    title="Total Books"
                    value={totalBooks}
                    subtitle="In your collection"
                />
                <StatCard
                    icon={<Library />}
                    title="Genres"
                    value={genreStats.length}
                    subtitle="Different genres"
                />
                <StatCard
                    icon={<UsersRound />}
                    title="Authors"
                    value={uniqueAuthors}
                    subtitle="Unique authors"
                />
                <StatCard
                    icon={<CalendarDays />}
                    title="Latest Year"
                    value={latestYear}
                    subtitle="Most recent book"
                />
            </div>

            {/* CHARTS */}
            <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <ChartCard title="Books by Genre">
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={genreStats}
                                cx="50%"
                                cy="50%"
                                outerRadius={90}
                                labelLine={false}
                                label={(props) => {
                                    const { payload } = props;
                                    return (
                                        <text
                                            x={props.x}
                                            y={props.y}
                                            textAnchor={props.textAnchor}
                                            dominantBaseline={props.dominantBaseline}
                                        >
                                            {(payload as GenreStat).genre}
                                        </text>
                                    );
                                }}
                                dataKey="count"
                            >
                                {genreStats.map((_, i) => (
                                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                ))}
                            </Pie>

                            <Tooltip
                                formatter={(value, _, entry) => [
                                    `${value} books`,
                                    (entry as { payload: GenreStat }).payload.genre,
                                ]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Books by Year">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={yearStats}>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>

            {/* SEARCH + VIEW + ADD BUTTON */}
            <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
                <div className="relative w-full flex-1">
                    <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <Input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search books..."
                        className="pl-10"
                    />
                </div>

                <div className="flex gap-2">
                    <IconToggle
                        icon={<LayoutGrid />}
                        active={view === 'grid'}
                        onClick={() => setView('grid')}
                    />
                    <IconToggle
                        icon={<List />}
                        active={view === 'list'}
                        onClick={() => setView('list')}
                    />
                </div>

                <Button asChild>
                    <Link to="/book/add">
                        <Plus className="mr-2 h-4 w-4" /> Add Book
                    </Link>
                </Button>
            </div>

            {/* BOOK LIST */}
            {filteredBooks.length ? (
                view === 'grid' ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredBooks.map((b) => (
                            <BookItem key={b.id} {...b} />
                        ))}
                    </div>
                ) : (
                    <div className="space-y-2">
                        {filteredBooks.map((b) => (
                            <BookItem key={b.id} variant="list" {...b} />
                        ))}
                    </div>
                )
            ) : (
                <div className="py-20 text-center">
                    <p className="text-muted-foreground mb-4 text-lg">No books found.</p>
                    <Button asChild variant="outline">
                        <Link to="/book/add">Add Your First Book</Link>
                    </Button>
                </div>
            )}
        </div>
    );
}

/* -------------------- SMALL COMPONENTS -------------------- */

function StatCard({ icon, title, value, subtitle }: StatCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <div className="text-muted-foreground h-4 w-4">{icon}</div>
            </CardHeader>
            <CardContent>
                {value !== undefined && <div className="text-2xl font-bold">{value}</div>}
                <p className="text-muted-foreground text-xs">{subtitle}</p>
            </CardContent>
        </Card>
    );
}

function ChartCard({ title, children }: ChartCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}

function IconToggle({ icon, active, onClick }: IconToggleProps) {
    return (
        <Button variant={active ? 'default' : 'outline'} size="icon" onClick={onClick}>
            {icon}
        </Button>
    );
}
